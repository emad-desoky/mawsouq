const pageUrl =
  "https://mawsouq.com/%D9%85%D9%8A%D8%A7%D9%87-%D8%B5%D8%A7%D9%84%D8%AD%D8%A9-%D9%84%D9%84%D8%B4%D8%B1%D8%A8";

const featuredImage =
  "https://mawsouq.com/wp-content/uploads/2026/06/مياة-الشرب.webp";

export const metadata = {
  // Off-topic legacy article (not a design/construction service): kept online but
  // excluded from Google so it does not dilute the site's topical focus.
  robots: { index: false, follow: true },
  title: "هل مياه منزلك صالحة للشرب؟",
  description:
    "ما هو تلوّث المياه؟ وكيف تعرف ان كانت مياه منزلك صالحة للشرب؟تعرف الاسباب الى تجعل مياه الشرب في المنازل مشكلة حقيقية",
  alternates: {
    canonical: pageUrl,
  },
  keywords: [
    "تلوّث المياه",
    "ما هو تلوث المياه؟",
    "مصادر تلوث مياه الشرب",
    "مخاطر مياه الشرب الملوثة",
  ],
  openGraph: {
    title: "هل مياه منزلك صالحة للشرب؟",
    description:
      "ما هو تلوّث المياه؟ وكيف تعرف ان كانت مياه منزلك صالحة للشرب؟تعرف الاسباب الى تجعل مياه الشرب في المنازل مشكلة حقيقية",
    url: pageUrl,
    siteName: "موسوق",
    locale: "ar_SA",
    type: "article",
    publishedTime: "2026-03-10T11:04:00+03:00",
    modifiedTime: "2026-02-24T22:36:00+03:00",
    images: [
      {
        url: featuredImage,
        alt: "ما هو تلوّث المياه؟ وكيف تعرف ان كانت مياه منزلك صالحة للشرب؟",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "هل مياه منزلك صالحة للشرب؟",
    description:
      "ما هو تلوّث المياه؟ وكيف تعرف ان كانت مياه منزلك صالحة للشرب؟تعرف الاسباب الى تجعل مياه الشرب في المنازل مشكلة حقيقية",
    images: [featuredImage],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "هل مياه منزلك صالحة للشرب؟",
  description:
    "ما هو تلوّث المياه؟ وكيف تعرف ان كانت مياه منزلك صالحة للشرب؟تعرف الاسباب الى تجعل مياه الشرب في المنازل مشكلة حقيقية",
  image: featuredImage,
  datePublished: "2026-03-10T11:04:00+03:00",
  dateModified: "2026-02-24T22:36:00+03:00",
  inLanguage: "ar-SA",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  author: {
    "@type": "Organization",
    name: "موسوق",
    url: "https://mawsouq.com",
  },
  publisher: {
    "@type": "Organization",
    name: "موسوق",
  },
};

export default function DrinkingWaterPage() {
  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="article-shell">
        <header className="article-hero">
          <div className="article-label">الصرف الصحى</div>

          <h1>هل مياه منزلك صالحة للشرب؟</h1>

          <p className="article-date">
            نُشر في مارس 10، 2026 — آخر تحديث فبراير 24، 2026
          </p>
        </header>

        <div className="article-content">
          <h2>ما هو تلوث المياه؟</h2>

          <p>
            تلوث المياه يعني أي تغير فيزيائي أو كيميائي في نوعية المياه، بطريقة
            مباشرة أو غير مباشرة مما يؤثر بشكل سلبي على الكائنات الحية، أو يجعل
            المياه غير صالحة للاستخدامات المطلوبة. وتعد مشكلة تلوث المياه مشكلةً
            خطيرة تهدد حياة الكائنات الحية على كوكب الأرض، وخاصة الحياة البشرية.
          </p>

          <p>
            يعتمد أغلب سكان كوكب الأرض على المصادر الطبيعية للحصول على مياه
            الشرب، كالأنهار والبحيرات والينابيع، ولكن بعض هذه المسطحات المائية
            غالبًا ما تكون محملة بمادتي النيتروجين والفسفور الناتجين عن العديد
            من مسببات التلوث. والمياه الجوفية المخزنة في باطن الأرض تشق طريقها
            بدءًا من السطح، فتحمل معها هاتين المادتين فتصل محملة بها وتبقى مخزنة
            في باطن الأرض حتى يتم استهلاكها.
          </p>

          <p>
            تتحمل أنظمة مياه الشرب العمومية عبئًا اقتصاديًا كبيرًا لمعالجة مياه
            الشرب الملوثة لذلك قد نجد بعض التقصير في بعض الدول النامية والدول
            الفقيرة، فلا تستطيع هذه الأنظمة معالجة المياه بشكل كامل أو صحيح.
          </p>

          <p>
            تعد مشكلة تلوث المياه، وخاصةً مياه الشرب في المنازل مشكلة حقيقية ومن
            شأنها أن تسبب الكثير من المشاكل الصحية للأشخاص الذين يشربونها.
            فمثلًا مياه الشرب المحملة بمادة الرصاص في الصنابير يمكنها أن تسبب
            ضررًا في الدماغ ومشاكل في خلايا الجسم وفي الكلى في حال الشرب المستمر
            لها وعلى المدى البعيد. ومع أن مياه الشرب هي مطلب أساسي لحياة
            الإنسان، إلا أن هنالك واحد من أصل ستة أشخاص لا يزالون يعانون من
            صعوبة الوصول لهذا المطلب.
          </p>

          <ArticleImage
            src="https://mawsouq.com/wp-content/uploads/2026/06/مياة-الشرب.webp"
            alt=""
            title="مياة الشرب"
            caption={
              <>
                المصدر:{" "}
                <a
                  href="http://www.alakhbar.press.ma/tag/%D8%AA%D9%84%D9%88%D8%AB-%D9%85%D9%8A%D8%A7%D9%87-%D8%A7%D9%84%D8%B4%D8%B1%D8%A8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alakhbar
                </a>
              </>
            }
          />

          <h2>مصادر تلوث مياه الشرب</h2>

          <p>
            هنالك العديد من مسببات ومصادر تلوث المياه في العالم، وتنقسم لأسباب
            مباشرة وأخرى غير مباشرة، تشمل الأسباب المباشرة المصانع، محطات معالجة
            المياه العادمة وأنظمة الصرف الصحي والعديد من الأسباب الأخرى.
          </p>

          <p>
            وبينما من السهل معرفة الأسباب المباشرة ومكافحتها أو الحد منها، إلا
            أن الأسباب الغير مباشرة تُعد أكثر خطرًا على مياه الشرب لأنه من الصعب
            تتبعها والتحكم فيهاـ وتشمل مجاري المياه المليئة بالرواسب، الأسمدة،
            المخلفات الحيوانية والكيماوية من المزارع، مواقع البناء والمناجم.
            بالإضافة لمكبات النفايات التي من شأنها أن تشكل خطر تسرب المواد
            المختلفة لمصادر المياه الجوفية.
          </p>

          <p>
            من الصعب الكشف عن التلوث في المياه الجوفية على عكس المياه السطحية،
            وتُعد طبقات المياه الجوفية سريعة التأثر بالتلوث من مصادر يمكن أن لا
            تؤثر بشكل مباشر بالمياه السطحية.
          </p>

          <h2>مخاطر مياه الشرب الملوثة</h2>

          <p>
            يرتبط تلوث المياه بالعديد من مسببات الأمراض التي تعيش في بيئة رطبة
            ومائية، هذه المسببات هي عبارة عن كائنات دقيقة (ميكروبات) قد تنتقل
            بين الأشخاص بسرعة وتسبب الكثير من المشاكل الصحية.
          </p>

          <p>
            ومن الأمراض والمشاكل الصحية المتعلقة بمياه الشرب الملوثة الأمراض
            التنفسية، السرطان، الإسهال، الإضطرابات العصبية وأمراض القلب والأوعية
            الدموية.
          </p>

          <h3>الأمراض البكتيرية:</h3>

          <p>
            تعد مياه الشرب الغير نقية أحد أكبر مسببات الأمراض البكتيرية، حيث أنه
            حوالي 4-15% من حالات الإسهال في العالم هي بسبب بكتيريا
            “Campylobacter Jejuni” الناتجة عن المياه الملوثة، ومن أعراضها
            الأخرى، الحمى، آلام البطن، الدوار والصداع. ويمكن الوقاية منها بواسطة
            استخدام المضادات الحيوية والممارسات السليمة للتنفس.
          </p>

          <p>
            ومن المشاكل الأخرى لمياه الشرب الملوثة هي الكوليرا “Cholera” والتي
            تسبب مشاكل صحية لدى المصاب، مثل الإسهال المفرط، الدوار والتقيؤ، لذلك
            يعاني المصاب من الجفاف والفشل الكلوي.
          </p>

          <h3>الأمراض الفيروسية:</h3>

          <p>
            أحد أهم الفيروسات الناتجة عن المياه الملوثة هو فيروس التهاب الكبد
            “Hepatitis”، ومن أعراضه الجانبية، الشحوب، فقدان الشهية، الإرهاق، عدم
            الراحة والحمى العالية، وقد يكون هذا الفيروس قاتلًا في حال بقي في
            الجسم لفترة طويلة.
          </p>

          <p>
            من الأمراض الفيروسية الأخرى، مرض التهاب الدماغ الذي تنتقل عدواه
            بواسطة البعوض، حيث تقوم بعوضة كوليكس “Culex” بوضع بيضها في الماء
            الملوث، ولا يظهر على المصابين أي أعراض لهذا المرض، بل يظهر عليهم
            الصداع، الحمى العالية وتشنج العضلات وفي بعض الحالات المتقدمة قد
            يتعرضون لغيبوبة وشلل، وتكمن المشكلة في عدم توفر لقاح للعلاج منه.
          </p>

          <p>
            وأحد أشهر الأمراض الفيروسية هو مرض شلل الأطفال، ومن أعراضه، التهاب
            الحلق، الحمى، الغثيان، الإمساك والإسهال وفي بعض الحالات قد ينتج عنه
            الشلل، ولكن يوجد لقاح للتعافي من هذا المرض.
          </p>

          <h3>الأمراض الطفيلية:</h3>

          <p>
            أهمها، مرض خفيّات الأبواغ “Cryptosporidiosis”، وهو مرض عالمي من
            أعراضه، الإسهال، إضطراب في الأمعاء والمعدة. ويُعد هذا الطفيل مقاومًا
            للتطهير والعلاج، ويقوم بالتأثير على الجهاز المناعي.
          </p>

          <p>
            من الأمراض الطفيلية أيضًا، الأميبيا التي تؤثر على بطانة المعدة، ويمر
            هذا الطفيل بشكلين، كيسي ولا كيسي. تحدث العدوى عندما تكون الأكياس في
            الماء الملوث ومن ثم يتم شربها من قِبَل الإنسان، أعراضها تشمل، الحمى،
            والبرد والإسهال.
          </p>

          <p>
            حسب منظمة الصحة العالمية WHO، فإن هنالك 4 مليارات إصابة بالإسهال
            ونتج عنها حوالي 2.2 مليون حالة وفاة.
          </p>

          <ArticleImage
            src="https://mawsouq.com/wp-content/uploads/2026/06/2مياة-الشرب.webp"
            alt=""
            title="مياة الشرب"
            caption={
              <>
                المصدر:{" "}
                <a
                  href="https://tucson.com/news/local/upgrade-at-tucson-water-treatment-plant-to-remove-more-pfas/article_2ba37805-6fa5-5191-adcd-2bcaff6afc5a.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tucson
                </a>
              </>
            }
          />

          <h2>كيف يمكنك المحافظة على نظافة مياه الشرب الخاصة بك؟</h2>

          <p>
            قد لا تهتم للوهلة الأولى عند رميك لشيء ما في القمامة أو تنظيفك
            للمرحاض بعد استخدامه، ولكن الكثير من ممارساتك اليومية قد تكون
            أسبابًا غير مباشرة لتلوث مياه الشرب الخاصة بك ولا تدرك دائمًا قدر
            تأثيرها. لذلك نتجه دائمًا لإلقاء اللوم الزراعة، الصناعة، وعمليات
            التنقيب,
          </p>

          <h4>بعض النصائح للحفاظ على مياه الشرب نظيفة:</h4>

          <h4>1- تعرف على مصدر وجودة مياه الشرب الموجودة في منزلك:</h4>

          <p>
            أخذك لفكرة عن مصدر المياه هو وقاية لك من أي احتمالية لوصول مياه شرب
            ملوثة لمنزلك، قم بالكشف المبكر عن هذا المصدر وتأكد من سلامته وجودته.
          </p>

          <h4>2- اختبر ماء الشرب في منزلك:</h4>

          <p>
            في حال كنت تستهلك مياه الشرب من بئر مياه خاص بك أو بئر قريب منك،
            فيجب عليك أن تفحص الماء المتواجد فيه بالاستعانة بإحدى الجهات المختصة
            للتأكد من سلامته من أي تلوث، ويُنصح بالفحص دوريًا مرة سنويًا.
          </p>

          <p>
            في حال كنت تستهلك المياه من البلدية مثلًا، قم بالفحص عن بعض المواد
            الكيماوية المعينة كالرصاص.
          </p>

          <h4>3- افحص نظام السباكة في منزل بشكل دوري:</h4>

          <p>
            كثيرًا ما تكون هنالك مشاكل في نظام السباكة ويعجز أصحاب المنزل عن
            معرفتها أو ملاحظتها لأن شبكات المياه لا تظهر لهم، ولكن العديد من
            مسببات تلوث المياه قد يكون سببها تسربات في شبكة المياه الخاصة
            بالمنزل. قم بفحصها والتأكد من سلامتها بشكل دوري.
          </p>

          <h4>4- تأكد من صحة وسلامة مياه الصنبور:</h4>

          <p>
            يمكنك دائمًا وضع نظام فلترة لجميع الصنابير في منزلك، فتقوم بتنقية
            المياه من العديد من المواد الكيماوية الغير مرغوب بها والشوائب التي
            قد تسبب لك المشاكل الصحية على المدى البعيد.
          </p>

          <h4>5- لا تنسى الثلج المستخدم في المنزل:</h4>

          <p>
            قد يركز الكثير من الناس على تلوث مياه الشرب ويُهملون نظافة الثلج
            المستخدم في الكثير من المشروبات. يعتمد أغلب أصحاب المنازل على
            الثلاجات التي تصنع الثلج ولكنهم لا يهتمون بنظافة جهاز تحضير الثلج،
            لذلك يمكنك تركيب جهاز لفترة المياه قبل وصولها للجزء المسؤول عن
            التثليج.
          </p>

          <h4>6- قم بحماية منزلك بالكامل:</h4>

          <p>
            هذه النقطة مهمة جدًا، وخاصةً للأشخاص الذين يسكنون بالقرب من أحد
            مسببات التلوث المباشر كالمصانع أو للأشخاص الذين يملكون نظام معالجة
            مياه قديم في منطقتهم. لذلك يُنصح بتركيب أنظمة فلترة لتنقية المياه
            قبل وصولها للبيت والتأكد من سلامته.
          </p>

          <p>
            لا ننسى أيضًا أن ممارساتنا اليومية في التخلص من النفايات أو التنظيف
            قد يكون لها أثر كبير على سلامة مياه الشرب الخاصة بنا، لذلك يجب علينا
            الحذر والاهتمام بكل عمل كبير أو صغير نقوم به.
          </p>

          <h2>الملخص</h2>

          <p>
            تلوث المياه هي مشكلة عالمية ويواجه العالم عواقبها الوخيمة كل يوم،
            وتؤثر العديد من العوامل مثل التخلص الخاطئ من النفايات المنزلية
            والزراعية، النمو السكاني، والاستخدام المفرط للأسمدة الكيماوية في
            تلوث المياه.
          </p>

          <p>
            تنتشر الأمراض البكتيرية والفيروسية والطفيلية بسرعة في الماء الملوث
            لتؤثر في صحة الإنسان ومن الأفضل أن يكون هناك نظام مناسب للتخلص من
            النفايات ويجب أن يتم معالجة القمامة قبل تصريفها في الأنهار ومناطق
            تجمع المياه.
          </p>

          <p>
            حافظ على صحيّة وسلامة مياه الشرب في منزلك باتباعك للخطوات المذكورة
            سابقًا، واحرص دائمًا على التأكد من جودة المياه قبل وصولها للمنزل.
          </p>

          <section className="related-box">
            <h2>مواضيع ذات صلة:</h2>

            <a
              href="https://mawsouq.com/%d8%b7%d8%b1%d9%82-%d8%aa%d9%85%d9%86%d8%b9-%d9%86%d9%85%d9%88-%d8%a7%d9%84%d8%b9%d9%81%d9%86/"
              target="_blank"
              rel="noopener noreferrer"
            >
              9 طرق تمنع نمو العفن في بيتك – تعرف عليها
            </a>

            <a
              href="https://mawsouq.com/%d9%83%d8%b4%d9%81-%d8%b9%d8%b2%d9%84-%d8%a7%d9%84%d8%ae%d8%b2%d8%a7%d9%86%d8%a7%d8%aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              كشف وعزل الخزانات – معدّل اسعار السوق, الضمانات, وغيره (2026)
            </a>

            <a
              href="https://mawsouq.com/%d9%85%d9%82%d8%a7%d9%88%d9%84-%d8%a8%d9%86%d8%a7%d8%a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              كيف اختار مقاول بناء؟ 5 نصائح مهمّة
            </a>

            <a
              href="https://mawsouq.com/%d9%83%d9%8a%d9%81-%d8%aa%d8%ac%d8%af-%d9%85%d9%87%d9%86%d8%af%d8%b3-%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a-%d8%af%d9%84%d9%8a%d9%84%d9%83-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84/"
              target="_blank"
              rel="noopener noreferrer"
            >
              كيف تجد مهندس معماري (دليلك الشامل)
            </a>

            <a href="https://mawsouq.com/%d8%b4%d8%b1%d9%88%d8%b7-%d8%a7%d9%84%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85/">
              شروط الاستخدام
            </a>
          </section>
        </div>
      </article>

      <style>{`
        .article-page {
          direction: rtl;
          background:
            radial-gradient(circle at 85% 12%, rgba(47, 134, 246, 0.12), transparent 32%),
            linear-gradient(180deg, var(--surface-2), var(--page));
          padding: calc(var(--nav-height) + 40px) 0 72px;
        }

        .article-shell {
          width: min(100% - 32px, 1040px);
          margin-inline: auto;
          overflow: hidden;
          border: 1px solid var(--hairline);
          border-radius: 34px;
          background: var(--surface);
          box-shadow: var(--card-shadow);
        }

        .article-hero {
          padding: clamp(30px, 5vw, 64px);
          border-bottom: 1px solid var(--hairline);
          background:
            radial-gradient(circle at 15% 20%, rgba(47, 134, 246, 0.12), transparent 34%),
            linear-gradient(135deg, var(--surface), var(--surface-2));
        }

        .article-label {
          width: max-content;
          max-width: 100%;
          margin-bottom: 18px;
          padding: 8px 16px;
          border: 1px solid var(--hairline);
          border-radius: 999px;
          background: var(--surface);
          color: var(--brand);
          font-size: 14px;
          font-weight: 900;
        }

        .article-hero h1 {
          margin: 0;
          color: var(--ink);
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.25;
          letter-spacing: -0.04em;
          font-weight: 950;
        }

        .article-date {
          margin: 18px 0 0;
          color: var(--ink-faint);
          font-size: 14px;
          font-weight: 800;
        }

        .article-content {
          padding: clamp(28px, 5vw, 60px);
        }

        .article-content p,
        .article-content li {
          color: var(--ink-muted);
          font-size: 18px;
          line-height: 2.15;
          font-weight: 500;
        }

        .article-content p {
          margin: 0 0 22px;
        }

        .article-content strong {
          color: var(--ink);
          font-weight: 900;
        }

        .article-content h2 {
          margin: 52px 0 20px;
          color: var(--brand);
          font-size: clamp(25px, 3.2vw, 38px);
          line-height: 1.45;
          font-weight: 950;
          letter-spacing: -0.025em;
        }

        .article-content h3 {
          margin: 44px 0 18px;
          color: var(--brand);
          font-size: clamp(22px, 2.5vw, 30px);
          line-height: 1.55;
          font-weight: 950;
        }

        .article-content h4 {
          margin: 34px 0 14px;
          color: var(--ink);
          font-size: clamp(20px, 2.2vw, 26px);
          line-height: 1.55;
          font-weight: 950;
        }

        .article-content a,
        .article-figure a {
          color: var(--brand);
          font-weight: 900;
          text-decoration: underline;
          text-underline-offset: 5px;
          overflow-wrap: anywhere;
        }

        .article-figure {
          margin: 44px auto;
          overflow: hidden;
          border: 1px solid var(--hairline);
          border-radius: 28px;
          background: var(--surface-2);
          box-shadow: 0 18px 55px rgba(16, 32, 51, 0.08);
        }

        .article-figure img {
          display: block;
          width: 100%;
          height: auto;
          background: var(--surface-2);
        }

        .article-figure figcaption {
          padding: 15px 18px 18px;
          color: var(--ink-faint);
          text-align: center;
          font-size: 14px;
          line-height: 1.8;
          font-weight: 800;
        }

        .related-box {
          margin-top: 60px;
          padding: clamp(22px, 4vw, 34px);
          border: 1px solid var(--hairline);
          border-radius: 28px;
          background:
            radial-gradient(circle at 10% 20%, rgba(47, 134, 246, 0.1), transparent 34%),
            var(--surface-2);
        }

        .related-box h2 {
          margin-top: 0;
        }

        .related-box a {
          display: block;
          margin-top: 14px;
          padding: 15px 18px;
          border: 1px solid var(--hairline);
          border-radius: 18px;
          background: var(--surface);
          color: var(--brand);
          text-decoration: none;
          box-shadow: 0 10px 28px rgba(16, 32, 51, 0.045);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .related-box a:hover {
          transform: translateY(-2px);
          border-color: var(--brand-bright);
        }

        @media (max-width: 1023px) {
          .article-page {
            padding-top: calc(var(--nav-height) + 28px);
          }
        }

        @media (max-width: 640px) {
          .article-page {
            padding: calc(var(--nav-height) + 20px) 0 48px;
          }

          .article-shell {
            width: min(100% - 20px, 1040px);
            border-radius: 24px;
          }

          .article-content p,
          .article-content li {
            font-size: 16px;
            line-height: 2;
          }

          .article-figure {
            border-radius: 20px;
          }

          .related-box {
            border-radius: 22px;
          }
        }
      `}</style>
    </main>
  );
}

function ArticleImage({ src, alt, title, caption }) {
  return (
    <figure className="article-figure">
      <img src={src} alt={alt} title={title} loading="lazy" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
