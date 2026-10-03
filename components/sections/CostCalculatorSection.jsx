"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * ONE-FILE DYNAMIC BUILDING COST CALCULATOR
 * ------------------------------------------------------------
 * This component follows the same logic structure as the company Excel sheet:
 *
 * Inputs:
 * - Land area
 * - Number of surrounding streets
 * - Number of floors
 * - Roof annex
 * - Ground annex / mashb
 * - Water tank
 * - Tank size m3
 * - Septic pit
 * - Pool
 * - Fence length
 * - Building type
 * - Finish level
 *
 * Outputs:
 * - Ground floor area
 * - Typical floor area
 * - Roof annex area
 * - Concrete quantity
 * - Steel quantity
 * - Block quantity
 * - Skeleton cost
 * - Finishing cost
 * - Foundations
 * - Fence
 * - Tank
 * - Septic pit
 * - Pool
 * - Facade finishing
 * - Total skeleton
 * - Total finishing
 * - Grand total
 *
 * IMPORTANT:
 * Prices are NOT hardcoded into formulas.
 * All prices live inside `calculatorData.prices` and can be:
 * 1. Edited by the user from the price panel in the UI.
 * 2. Passed as a prop from the parent component.
 * 3. Loaded from an API using the `pricesApiUrl` prop.
 *
 * Example API JSON shape:
 * {
 *   "prices": {
 *     "skeleton": {
 *       "laborPerBuiltM2": 175,
 *       "concretePerM3": 225,
 *       "steelPerTon": 3300,
 *       "blockPerUnit": 2.5
 *     },
 *     "finishingPerM2": {
 *       "economic": 1200,
 *       "medium": 1500,
 *       "luxury": 2000
 *     },
 *     "extras": {
 *       "foundationPerLandM2": 400,
 *       "fencePerMeter": 400,
 *       "tankPerM3": 400,
 *       "septicPerTankM3": 150,
 *       "poolPercentOfTankCost": 0.6,
 *       "groundAnnexFixed": 0
 *     },
 *     "facadePerM2": {
 *       "economic": 250,
 *       "medium": 450,
 *       "luxury": 900
 *     }
 *   }
 * }
 */

const DEFAULT_CALCULATOR_DATA = {
  version: "dynamic-company-calculator-v1",
  currency: "SAR",

  labels: {
    yes: "يوجد",
    no: "لا يوجد",
  },

  finishLevels: {
    economic: {
      label: "اقتصادي",
      description: "دهانات فقط وشبابيك ألوميتال عادي",
    },
    medium: {
      label: "متوسط",
      description: "دهانات مع تطعيمات حجر وشبابيك ألوميتال متوسطة",
    },
    luxury: {
      label: "فاخر",
      description: "واجهات حجر بالكامل مع GRC أو كلادينج وشبابيك زجاجية كبيرة",
    },
  },

  buildingTypes: {
    villa: {
      label: "فيللا",

      /**
       * These are formula ratios from the Excel structure, not market prices.
       * Excel reference:
       * - Ground floor area = 60% of land area
       * - First floor area = 60% of land area
       * - Roof annex area = 50% of first floor = 30% of land area
       */
      areaRules: {
        groundFloorLandRatio: 0.6,
        typicalFloorLandRatio: 0.6,
        roofAnnexOfTypicalFloorRatio: 0.5,
        facadeLandRatio: 0.4,
      },

      /**
       * Quantity rules from Excel structure.
       * They scale with land area, matching the original sheet.
       */
      quantityRules: {
        groundFloor: {
          concreteM3PerLandM2: 0.14,
          steelTonPerLandM2: 0.025,
          blockUnitsPerLandM2: 2,
        },
        typicalFloor: {
          concreteM3PerLandM2: 0.14,
          steelTonPerLandM2: 0.02,
          blockUnitsPerLandM2: 2,
        },
        roofAnnex: {
          concreteM3PerLandM2: 0.09,
          steelTonPerLandM2: 0.015,
          blockUnitsPerLandM2: 1,
        },
      },

      /**
       * Street multipliers are included because the Excel has this input.
       * The old sheet did not apply a visible price effect, so all defaults are 1.
       * The company can update them later without touching calculation code.
       */
      streetMultipliers: {
        1: 1,
        2: 1,
        3: 1,
      },
    },

    apartment: {
      label: "عمارة سكنية",
      areaRules: {
        groundFloorLandRatio: 0.7,
        typicalFloorLandRatio: 0.7,
        roofAnnexOfTypicalFloorRatio: 0.25,
        facadeLandRatio: 0.45,
      },
      quantityRules: {
        groundFloor: {
          concreteM3PerLandM2: 0,
          steelTonPerLandM2: 0,
          blockUnitsPerLandM2: 0,
        },
        typicalFloor: {
          concreteM3PerLandM2: 0,
          steelTonPerLandM2: 0,
          blockUnitsPerLandM2: 0,
        },
        roofAnnex: {
          concreteM3PerLandM2: 0,
          steelTonPerLandM2: 0,
          blockUnitsPerLandM2: 0,
        },
      },
      streetMultipliers: {
        1: 1,
        2: 1,
        3: 1,
      },
    },

    resthouse: {
      label: "استراحة",
      areaRules: {
        groundFloorLandRatio: 0.5,
        typicalFloorLandRatio: 0,
        roofAnnexOfTypicalFloorRatio: 0,
        facadeLandRatio: 0.35,
      },
      quantityRules: {
        groundFloor: {
          concreteM3PerLandM2: 0,
          steelTonPerLandM2: 0,
          blockUnitsPerLandM2: 0,
        },
        typicalFloor: {
          concreteM3PerLandM2: 0,
          steelTonPerLandM2: 0,
          blockUnitsPerLandM2: 0,
        },
        roofAnnex: {
          concreteM3PerLandM2: 0,
          steelTonPerLandM2: 0,
          blockUnitsPerLandM2: 0,
        },
      },
      streetMultipliers: {
        1: 1,
        2: 1,
        3: 1,
      },
    },
  },

  /**
   * Editable default prices.
   * Replace these from API, CMS, DB, admin panel, or parent props.
   * They are not part of the formula logic.
   */
  prices: {
    skeleton: {
      laborPerBuiltM2: 175,
      concretePerM3: 225,
      steelPerTon: 3300,
      blockPerUnit: 2.5,
    },
    finishingPerM2: {
      economic: 1200,
      medium: 1500,
      luxury: 2000,
    },
    extras: {
      foundationPerLandM2: 400,
      fencePerMeter: 400,
      tankPerM3: 400,
      septicPerTankM3: 150,
      poolPercentOfTankCost: 0.6,
      groundAnnexFixed: 0,
    },
    facadePerM2: {
      economic: 250,
      medium: 450,
      luxury: 900,
    },
  },
};

function deepMerge(base, override) {
  if (!override || typeof override !== "object") return base;

  const output = Array.isArray(base) ? [...base] : { ...base };

  Object.keys(override).forEach((key) => {
    const baseValue = base?.[key];
    const overrideValue = override[key];

    if (
      baseValue &&
      overrideValue &&
      typeof baseValue === "object" &&
      typeof overrideValue === "object" &&
      !Array.isArray(baseValue) &&
      !Array.isArray(overrideValue)
    ) {
      output[key] = deepMerge(baseValue, overrideValue);
    } else {
      output[key] = overrideValue;
    }
  });

  return output;
}

function toNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function updateNestedValue(object, path, value) {
  const keys = path.split(".");

  return keys.reduceRight((acc, key, index) => {
    if (index === keys.length - 1) {
      return { [key]: value };
    }

    return { [key]: acc };
  }, {});
}

function createFloorCalculation({
  title,
  landArea,
  builtArea,
  quantityRules,
  prices,
  finishLevel,
  costMultiplier,
}) {
  const concrete = landArea * quantityRules.concreteM3PerLandM2;
  const steel = landArea * quantityRules.steelTonPerLandM2;
  const blocks = landArea * quantityRules.blockUnitsPerLandM2;

  const skeletonCostBeforeMultiplier =
    builtArea * prices.skeleton.laborPerBuiltM2 +
    concrete * prices.skeleton.concretePerM3 +
    steel * prices.skeleton.steelPerTon +
    blocks * prices.skeleton.blockPerUnit;

  const skeletonCost = skeletonCostBeforeMultiplier * costMultiplier;
  const finishingCost =
    builtArea * prices.finishingPerM2[finishLevel] * costMultiplier;

  return {
    title,
    area: builtArea,
    concrete,
    steel,
    blocks,
    skeletonCost,
    finishingCost,
  };
}

export default function CostCalculatorSection({
  initialCalculatorData = {},
  pricesApiUrl = "",
}) {
  const [calculatorData, setCalculatorData] = useState(() =>
    deepMerge(DEFAULT_CALCULATOR_DATA, initialCalculatorData),
  );

  const [isPricePanelOpen, setIsPricePanelOpen] = useState(false);
  const [apiStatus, setApiStatus] = useState("");

  const [landArea, setLandArea] = useState("500");
  const [streets, setStreets] = useState("1");
  const [floors, setFloors] = useState("2");
  const [hasRoofAnnex, setHasRoofAnnex] = useState("yes");
  const [hasGroundAnnex, setHasGroundAnnex] = useState("yes");
  const [hasTank, setHasTank] = useState("yes");
  const [tankSize, setTankSize] = useState("50");
  const [hasSeptic, setHasSeptic] = useState("yes");
  const [hasPool, setHasPool] = useState("yes");
  const [wallLength, setWallLength] = useState("100");
  const [buildingType, setBuildingType] = useState("villa");
  const [finishLevel, setFinishLevel] = useState("economic");

  useEffect(() => {
    if (!pricesApiUrl) return;

    let isMounted = true;

    async function loadDynamicPrices() {
      try {
        setApiStatus("جاري تحميل الأسعار الحالية...");

        const response = await fetch(pricesApiUrl, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load calculator prices");
        }

        const apiData = await response.json();

        if (!isMounted) return;

        setCalculatorData((current) => deepMerge(current, apiData));
        setApiStatus("تم تحميل الأسعار الحالية");
      } catch (error) {
        if (!isMounted) return;
        setApiStatus(
          "تعذر تحميل الأسعار من الرابط، تم استخدام الأسعار المحلية القابلة للتعديل",
        );
      }
    }

    loadDynamicPrices();

    return () => {
      isMounted = false;
    };
  }, [pricesApiUrl]);

  const formatNumber = (value, digits = 0) => {
    const number = toNumber(value);

    return number.toLocaleString("ar-EG", {
      maximumFractionDigits: digits,
    });
  };

  const formatSAR = (value) => `${formatNumber(value)} ر.س`;

  const updateCalculatorData = (path, rawValue) => {
    const numericValue = toNumber(rawValue);
    const patch = updateNestedValue(calculatorData, path, numericValue);
    setCalculatorData((current) => deepMerge(current, patch));
  };

  const result = useMemo(() => {
    const building = calculatorData.buildingTypes[buildingType];
    const prices = calculatorData.prices;

    const land = toNumber(landArea);
    const floorsCount = Math.max(Math.floor(toNumber(floors, 1)), 1);
    const upperFloorsCount = Math.max(floorsCount - 1, 0);
    const tankM3 = toNumber(tankSize);
    const fenceMeters = toNumber(wallLength);
    const streetMultiplier = toNumber(building.streetMultipliers[streets], 1);

    const groundArea = land * building.areaRules.groundFloorLandRatio;
    const typicalFloorArea = land * building.areaRules.typicalFloorLandRatio;
    const roofAnnexArea =
      hasRoofAnnex === "yes"
        ? typicalFloorArea * building.areaRules.roofAnnexOfTypicalFloorRatio
        : 0;

    const groundFloor = createFloorCalculation({
      title: "الدور الأرضي",
      landArea: land,
      builtArea: groundArea,
      quantityRules: building.quantityRules.groundFloor,
      prices,
      finishLevel,
      costMultiplier: streetMultiplier,
    });

    const typicalFloors = Array.from({ length: upperFloorsCount }, (_, index) =>
      createFloorCalculation({
        title: index === 0 ? "الدور الأول" : `الدور ${index + 1}`,
        landArea: land,
        builtArea: typicalFloorArea,
        quantityRules: building.quantityRules.typicalFloor,
        prices,
        finishLevel,
        costMultiplier: streetMultiplier,
      }),
    );

    const roofAnnex =
      hasRoofAnnex === "yes"
        ? createFloorCalculation({
            title: "الملحق العلوي",
            landArea: land,
            builtArea: roofAnnexArea,
            quantityRules: building.quantityRules.roofAnnex,
            prices,
            finishLevel,
            costMultiplier: streetMultiplier,
          })
        : null;

    const floorItems = [groundFloor, ...typicalFloors, roofAnnex].filter(
      Boolean,
    );

    const foundationCost =
      land * prices.extras.foundationPerLandM2 * streetMultiplier;
    const fenceCost = fenceMeters * prices.extras.fencePerMeter;
    const tankCost = hasTank === "yes" ? tankM3 * prices.extras.tankPerM3 : 0;
    const septicCost =
      hasSeptic === "yes" ? tankM3 * prices.extras.septicPerTankM3 : 0;
    const poolCost =
      hasPool === "yes" ? tankCost * prices.extras.poolPercentOfTankCost : 0;
    const groundAnnexCost =
      hasGroundAnnex === "yes" ? prices.extras.groundAnnexFixed : 0;

    const facadeArea = land * building.areaRules.facadeLandRatio;
    const facadeCost = facadeArea * prices.facadePerM2[finishLevel];

    const skeletonFloorsTotal = floorItems.reduce(
      (sum, item) => sum + item.skeletonCost,
      0,
    );

    const finishingFloorsTotal = floorItems.reduce(
      (sum, item) => sum + item.finishingCost,
      0,
    );

    const skeletonTotal =
      skeletonFloorsTotal +
      foundationCost +
      fenceCost +
      tankCost +
      septicCost +
      poolCost +
      groundAnnexCost;

    const grandTotal = skeletonTotal + finishingFloorsTotal + facadeCost;

    return {
      building,
      floorItems,
      facadeArea,
      foundationCost,
      fenceCost,
      tankCost,
      septicCost,
      poolCost,
      groundAnnexCost,
      facadeCost,
      skeletonFloorsTotal,
      finishingFloorsTotal,
      skeletonTotal,
      grandTotal,
    };
  }, [
    calculatorData,
    buildingType,
    landArea,
    floors,
    streets,
    hasRoofAnnex,
    hasGroundAnnex,
    hasTank,
    tankSize,
    hasSeptic,
    hasPool,
    wallLength,
    finishLevel,
  ]);

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[var(--hairline)] focus:ring-2 focus:ring-[var(--ring)] outline-none bg-[var(--surface)] text-[var(--ink)] disabled:bg-[var(--surface-3)] disabled:text-[var(--ink-faint)]";
  const smallInputClass =
    "w-full px-3 py-2 rounded-lg border border-[var(--hairline)] focus:ring-2 focus:ring-[var(--ring)] outline-none bg-[var(--surface)] text-[var(--ink)] text-sm";

  const buildingOptions = Object.entries(calculatorData.buildingTypes);
  const finishOptions = Object.entries(calculatorData.finishLevels);

  return (
    <section
      id="cost-calculator"
      dir="rtl"
      className="py-24 bg-[var(--page)] text-[var(--ink)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative max-w-7xl">
        <div className="bg-[var(--surface)] rounded-3xl p-8 md:p-12 border border-[var(--hairline)] relative overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-4">
                حاسبة تكلفة البناء
              </h2>

              {apiStatus ? (
                <p className="text-sm text-[var(--ink-muted)] mt-3">
                  {apiStatus}
                </p>
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => setIsPricePanelOpen((value) => !value)}
              className="shrink-0 rounded-full bg-blue-900 text-white px-6 py-3 font-bold hover:scale-105 transition-transform"
            >
              {isPricePanelOpen ? "إخفاء الأسعار" : "تحديث الأسعار"}
            </button>
          </div>
          {isPricePanelOpen ? (
            <div className="mb-10 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)] p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-4">
                الأسعار الحالية القابلة للتعديل
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <PriceField
                  label="مصنعية العظم / م²"
                  value={calculatorData.prices.skeleton.laborPerBuiltM2}
                  onChange={(value) =>
                    updateCalculatorData(
                      "prices.skeleton.laborPerBuiltM2",
                      value,
                    )
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="سعر الخرسانة / م³"
                  value={calculatorData.prices.skeleton.concretePerM3}
                  onChange={(value) =>
                    updateCalculatorData("prices.skeleton.concretePerM3", value)
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="سعر الحديد / طن"
                  value={calculatorData.prices.skeleton.steelPerTon}
                  onChange={(value) =>
                    updateCalculatorData("prices.skeleton.steelPerTon", value)
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="سعر البلوك / وحدة"
                  value={calculatorData.prices.skeleton.blockPerUnit}
                  onChange={(value) =>
                    updateCalculatorData("prices.skeleton.blockPerUnit", value)
                  }
                  inputClass={smallInputClass}
                />

                <PriceField
                  label="تشطيب اقتصادي / م²"
                  value={calculatorData.prices.finishingPerM2.economic}
                  onChange={(value) =>
                    updateCalculatorData(
                      "prices.finishingPerM2.economic",
                      value,
                    )
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="تشطيب متوسط / م²"
                  value={calculatorData.prices.finishingPerM2.medium}
                  onChange={(value) =>
                    updateCalculatorData("prices.finishingPerM2.medium", value)
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="تشطيب فاخر / م²"
                  value={calculatorData.prices.finishingPerM2.luxury}
                  onChange={(value) =>
                    updateCalculatorData("prices.finishingPerM2.luxury", value)
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="الأساسات / م² أرض"
                  value={calculatorData.prices.extras.foundationPerLandM2}
                  onChange={(value) =>
                    updateCalculatorData(
                      "prices.extras.foundationPerLandM2",
                      value,
                    )
                  }
                  inputClass={smallInputClass}
                />

                <PriceField
                  label="السور / متر طولي"
                  value={calculatorData.prices.extras.fencePerMeter}
                  onChange={(value) =>
                    updateCalculatorData("prices.extras.fencePerMeter", value)
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="الخزان / م³"
                  value={calculatorData.prices.extras.tankPerM3}
                  onChange={(value) =>
                    updateCalculatorData("prices.extras.tankPerM3", value)
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="البيارة / م³ خزان"
                  value={calculatorData.prices.extras.septicPerTankM3}
                  onChange={(value) =>
                    updateCalculatorData("prices.extras.septicPerTankM3", value)
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="المسبح كنسبة من الخزان"
                  value={calculatorData.prices.extras.poolPercentOfTankCost}
                  step="0.01"
                  onChange={(value) =>
                    updateCalculatorData(
                      "prices.extras.poolPercentOfTankCost",
                      value,
                    )
                  }
                  inputClass={smallInputClass}
                />

                <PriceField
                  label="واجهة اقتصادي / م²"
                  value={calculatorData.prices.facadePerM2.economic}
                  onChange={(value) =>
                    updateCalculatorData("prices.facadePerM2.economic", value)
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="واجهة متوسط / م²"
                  value={calculatorData.prices.facadePerM2.medium}
                  onChange={(value) =>
                    updateCalculatorData("prices.facadePerM2.medium", value)
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="واجهة فاخر / م²"
                  value={calculatorData.prices.facadePerM2.luxury}
                  onChange={(value) =>
                    updateCalculatorData("prices.facadePerM2.luxury", value)
                  }
                  inputClass={smallInputClass}
                />
                <PriceField
                  label="الملحق الأرضي / المشب"
                  value={calculatorData.prices.extras.groundAnnexFixed}
                  onChange={(value) =>
                    updateCalculatorData(
                      "prices.extras.groundAnnexFixed",
                      value,
                    )
                  }
                  inputClass={smallInputClass}
                />
              </div>
            </div>
          ) : null}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="مساحة الأرض م²">
                  <input
                    type="number"
                    value={landArea}
                    onChange={(event) => setLandArea(event.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="عدد الشوارع المحيطة">
                  <select
                    value={streets}
                    onChange={(event) => setStreets(event.target.value)}
                    className={inputClass}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </Field>

                <Field label="عدد الأدوار">
                  <input
                    type="number"
                    min="1"
                    value={floors}
                    onChange={(event) => setFloors(event.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="نوع المبنى">
                  <select
                    value={buildingType}
                    onChange={(event) => setBuildingType(event.target.value)}
                    className={inputClass}
                  >
                    {buildingOptions.map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="الملحق العلوي">
                  <select
                    value={hasRoofAnnex}
                    onChange={(event) => setHasRoofAnnex(event.target.value)}
                    className={inputClass}
                  >
                    <option value="yes">يوجد</option>
                    <option value="no">لا يوجد</option>
                  </select>
                </Field>

                <Field label="الملحق الأرضي / المشب">
                  <select
                    value={hasGroundAnnex}
                    onChange={(event) => setHasGroundAnnex(event.target.value)}
                    className={inputClass}
                  >
                    <option value="yes">يوجد</option>
                    <option value="no">لا يوجد</option>
                  </select>
                </Field>

                <Field label="خزان مياه">
                  <select
                    value={hasTank}
                    onChange={(event) => setHasTank(event.target.value)}
                    className={inputClass}
                  >
                    <option value="yes">يوجد</option>
                    <option value="no">لا يوجد</option>
                  </select>
                </Field>

                <Field label="مساحة الخزان م³">
                  <input
                    type="number"
                    value={tankSize}
                    onChange={(event) => setTankSize(event.target.value)}
                    className={inputClass}
                    disabled={hasTank === "no"}
                  />
                </Field>

                <Field label="بيارة صرف">
                  <select
                    value={hasSeptic}
                    onChange={(event) => setHasSeptic(event.target.value)}
                    className={inputClass}
                  >
                    <option value="yes">يوجد</option>
                    <option value="no">لا يوجد</option>
                  </select>
                </Field>

                <Field label="المسبح">
                  <select
                    value={hasPool}
                    onChange={(event) => setHasPool(event.target.value)}
                    className={inputClass}
                  >
                    <option value="yes">يوجد</option>
                    <option value="no">لا يوجد</option>
                  </select>
                </Field>

                <Field label="مجموع أطوال السور م">
                  <input
                    type="number"
                    value={wallLength}
                    onChange={(event) => setWallLength(event.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="مستوى التشطيب">
                  <select
                    value={finishLevel}
                    onChange={(event) => setFinishLevel(event.target.value)}
                    className={inputClass}
                  >
                    {finishOptions.map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-2xl p-8 shadow-lg">
                <span className="block text-sm mb-2 opacity-80">
                  إجمالي تكلفة المبنى التقديرية
                </span>
                <span className="block text-4xl font-bold">
                  {formatSAR(result.grandTotal)}
                </span>
                <span className="block text-sm mt-3 opacity-80">
                  {result.building.label} -{" "}
                  {calculatorData.finishLevels[finishLevel].label}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <SummaryCard
                  title="إجمالي العظم"
                  value={formatSAR(result.skeletonTotal)}
                />
                <SummaryCard
                  title="إجمالي التشطيب الداخلي"
                  value={formatSAR(result.finishingFloorsTotal)}
                />
                <SummaryCard
                  title="تشطيب الواجهات"
                  value={formatSAR(result.facadeCost)}
                />
                <SummaryCard
                  title="تكلفة الأساسات"
                  value={formatSAR(result.foundationCost)}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse bg-[var(--surface)] text-[var(--ink)] rounded-2xl overflow-hidden shadow-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="p-4 text-right">البند</th>
                  <th className="p-4 text-right">المساحة م²</th>
                  <th className="p-4 text-right">خرسانة م³</th>
                  <th className="p-4 text-right">حديد طن</th>
                  <th className="p-4 text-right">بلوكات</th>
                  <th className="p-4 text-right">تكلفة العظم</th>
                  <th className="p-4 text-right">تكلفة التشطيب</th>
                </tr>
              </thead>
              <tbody>
                {result.floorItems.map((item) => (
                  <tr
                    key={item.title}
                    className="border-b border-[var(--hairline)]"
                  >
                    <td className="p-4 font-semibold text-blue-900">
                      {item.title}
                    </td>
                    <td className="p-4">{formatNumber(item.area, 2)}</td>
                    <td className="p-4">{formatNumber(item.concrete, 2)}</td>
                    <td className="p-4">{formatNumber(item.steel, 2)}</td>
                    <td className="p-4">{formatNumber(item.blocks, 0)}</td>
                    <td className="p-4">{formatSAR(item.skeletonCost)}</td>
                    <td className="p-4">{formatSAR(item.finishingCost)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SummaryCard
              title="تكلفة السور"
              value={formatSAR(result.fenceCost)}
            />
            <SummaryCard
              title="تكلفة الخزان"
              value={formatSAR(result.tankCost)}
            />
            <SummaryCard
              title="تكلفة البيارة"
              value={formatSAR(result.septicCost)}
            />
            <SummaryCard
              title="تكلفة المسبح"
              value={formatSAR(result.poolCost)}
            />
            <SummaryCard
              title="تكلفة الملحق الأرضي"
              value={formatSAR(result.groundAnnexCost)}
            />
            <SummaryCard
              title="تشطيب الواجهات"
              value={formatSAR(result.facadeCost)}
            />
            <SummaryCard
              title="إجمالي العظم فقط"
              value={formatSAR(result.skeletonTotal)}
            />
            <SummaryCard
              title="إجمالي التشطيب الداخلي"
              value={formatSAR(result.finishingFloorsTotal)}
            />
            <SummaryCard
              title="الإجمالي النهائي"
              value={formatSAR(result.grandTotal)}
              highlight
            />
          </div>
          <a
            href="https://wa.me/966598061334?text=مرحبا%20موسوق،%20أريد%20استشارة%20عن%20مشروعي"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            استخدم الاستشارة مع موسوق
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[var(--ink)] mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}

function PriceField({ label, value, onChange, inputClass, step = "1" }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
        {label}
      </label>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass}
      />
    </div>
  );
}

function SummaryCard({ title, value, highlight = false }) {
  return (
    <div
      className={`rounded-2xl p-5 border shadow-sm ${
        highlight
          ? "bg-[var(--brand)] text-white border-[var(--brand)]"
          : "bg-[var(--surface)] text-[var(--ink)] border-[var(--hairline)]"
      }`}
    >
      <span
        className={`block text-sm mb-1 ${
          highlight ? "opacity-80" : "text-[var(--ink-muted)]"
        }`}
      >
        {title}
      </span>
      <span className="block text-xl font-bold">{value}</span>
    </div>
  );
}
