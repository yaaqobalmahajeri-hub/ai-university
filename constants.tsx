
import React from 'react';
import type { LectureData } from './types';
import CritiqueBlock from './components/CritiqueBlock';
import Quiz from './components/Quiz';
import ExpertSystemSimulator from './components/ExpertSystemSimulator';
import DataLabelingSimulator from './components/DataLabelingSimulator';
import LearningSimulator from './components/LearningSimulator';
import AIFieldsExplorer from './components/AIFieldsExplorer';
import MLTaskSimulator from './components/MLTaskSimulator';
import ModelLifecycleSimulator from './components/ModelLifecycleSimulator';
import RegexSimulator from './components/RegexSimulator';
import SpaCySimulator from './components/SpaCySimulator';
import AnnotatedCodeBlock from './components/AnnotatedCodeBlock';
import NumPyArrayCreator from './components/NumPyArrayCreator';
import NumPyArithmeticSimulator from './components/NumPyArithmeticSimulator';
import NumPyAttributeExplorer from './components/NumPyAttributeExplorer';
import PandasDataFrameVisualizer from './components/PandasDataFrameVisualizer';
import BoWVisualizer from './components/BoWVisualizer';
import SimulatorWithSteps from './components/SimulatorWithSteps';
import ConfusionMatrixVisualizer from './components/ConfusionMatrixVisualizer';
import MaxMatchVisualizer from './components/MaxMatchVisualizer';
import SimpleBarChart from './components/SimpleBarChart';
import Accordion from './components/Accordion';
import TokenizationComparator from './components/TokenizationComparator';
import GeminiCodeBlock from './components/GeminiCodeBlock';
import TFIDFVisualizer from './components/TFIDFVisualizer';
import PandasFilteringSimulator from './components/PandasFilteringSimulator';
import PerceptronSimulator from './components/PerceptronSimulator';
import LearningMechanismSimulator from './components/LearningMechanismSimulator';
import InteractivePerceptronTrainer from './components/InteractivePerceptronTrainer';
import ANDGatePerceptronSimulator from './components/ANDGatePerceptronSimulator';
import BPESimulator from './components/BPESimulator';


export const LECTURES_DATA: LectureData[] = [
  {
    id: "lecture-1",
    title: "المحاضرة الأولى: مقدمة شاملة في الذكاء الاصطناعي",
    sections: [
       {
        id: "l1-intro",
        title: "مقدمة: ما هو الذكاء الاصطناعي؟",
        content: (
          <>
            <p className="text-lg leading-relaxed mb-4">
              الذكاء الاصطناعي (AI) هو فرع واسع من علوم الحاسوب يهدف إلى إنشاء آلات وأنظمة قادرة على أداء مهام تتطلب عادةً ذكاءً بشريًا. تشمل هذه المهام التعلم من التجربة، فهم اللغة الطبيعية، التعرف على الأنماط، اتخاذ القرارات، وحل المشكلات. الهدف ليس استنساخ الوعي البشري، بل محاكاة القدرات المعرفية لحل مشاكل عملية.
            </p>
             <CritiqueBlock>
                  <p>
                    <strong>الذكاء الاصطناعي الضيق (Narrow AI):</strong> معظم الأنظمة الحالية، من مساعدك الصوتي إلى أنظمة التوصية، هي ذكاء اصطناعي ضيق. هي متخصصة في مهمة واحدة وتتفوق فيها، لكنها لا تستطيع تعميم معرفتها على مهام أخرى.
                  </p>
                  <p className="mt-2">
                    <strong>الذكاء الاصطناعي العام (AGI):</strong> هو المفهوم النظري لآلة تمتلك ذكاءً مكافئًا للبشر، قادرة على فهم وتعلم وأداء أي مهمة فكرية. هذا الهدف لا يزال بعيد المنال ويُمثل تحديًا علميًا هائلاً.
                  </p>
            </CritiqueBlock>
          </>
        ),
      },
      {
        id: "l1-history",
        title: "لمحة تاريخية: من الأنظمة الخبيرة إلى تعلم الآلة",
        content: (
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              في بداياته (الخمسينيات - الثمانينيات)، كان الذكاء الاصطناعي يعتمد على "الأنظمة الخبيرة". هذه الأنظمة برمجت فيها المعرفة البشرية على شكل قواعد صريحة (IF-THEN) باستخدام لغات مثل LISP و Prolog. كانت تحاكي خبيرًا في مجال محدد، لكنها كانت هشة وصعبة التوسيع.
            </p>
            <h4 className="text-xl font-bold text-white mt-6">محاكاة تفاعلية: نظام خبير لتشخيص الأمراض</h4>
            <p>توضح هذه المحاكاة كيف يطبق "محرك الاستدلال" قاعدة معرفية على "حقائق" للوصول إلى استنتاج.</p>
            <SimulatorWithSteps
              steps={[
                "لدينا 'حقائق' معروفة عن المريض: يعاني من حمى وسعال.",
                "لدينا 'قاعدة معرفية' تقول: إذا كان المريض يعاني من حمى وسعال، فمن المحتمل أنه مصاب بالإنفلونزا.",
                "يقوم 'محرك الاستدلال' بتطبيق القاعدة على الحقائق.",
                "يصل النظام إلى 'استنتاج': قد يكون المريض مصابًا بالانفلونزا.",
              ]}
              simulatorComponent={ExpertSystemSimulator}
            />
          </div>
        ),
      },
       {
            id: "l1-fields",
            title: "محاكاة تفاعلية: استكشاف مجالات الذكاء الاصطناعي",
            content: (
              <div className="space-y-4 text-lg leading-relaxed">
                <p>يتفرع الذكاء الاصطناعي إلى عدة مجالات متخصصة، لكل منها تطبيقاته العملية. انقر على البطاقات لاستكشافها.</p>
                <AIFieldsExplorer />
              </div>
            ),
        },
        {
            id: "l1-tasks",
            title: "محاكاة تفاعلية: فهم مهام تعلم الآلة",
             content: (
              <div className="space-y-4 text-lg leading-relaxed">
                <p>في تعلم الآلة، "المهمة" هي المشكلة التي نريد أن يحلها النموذج. تحديد المهمة بوضوح هو خطوة أساسية تحدد نوع الخوارزمية والبيانات المطلوبة.</p>
                <SimulatorWithSteps
                    steps={[
                        "التصنيف (Classification): مهمة تصنيف البيانات إلى فئات محددة مسبقًا. المثال يوضح فصل النقاط إلى فئتين (حمراء وزرقاء).",
                        "الانحدار (Regression): مهمة التنبؤ بقيمة رقمية مستمرة. المثال يوضح رسم خط يتنبأ بالعلاقة بين متغيرين.",
                        "التجميع (Clustering): مهمة تجميع البيانات المتشابهة معًا في مجموعات (عناقيد) دون معرفة مسبقة بالفئات."
                    ]}
                    simulatorComponent={MLTaskSimulator}
                />
              </div>
            )
        },
         {
            id: "l1-data-types",
            title: "محاكاة تفاعلية: البيانات المعلّمة وغير المعلّمة",
             content: (
                 <div className="space-y-4 text-lg leading-relaxed">
                <p>تعتمد خوارزمية تعلم الآلة التي نستخدمها بشكل كبير على نوعية البيانات المتاحة لدينا.</p>
                 <SimulatorWithSteps
                    steps={[
                        "البيانات غير المعلّمة (Unlabeled): هي بيانات خام بدون أي تسميات أو فئات. لا نعرف ما تمثله كل صورة.",
                        "عملية التعلِيم (Labeling): يقوم الإنسان بإضافة تسميات (Labels) للبيانات لتوضيح محتواها.",
                        "البيانات المعلّمة (Labeled): هي بيانات تم إرفاق تسمية أو فئة صحيحة بكل عينة منها، وهي جاهزة لتدريب النماذج الإشرافية."
                    ]}
                    simulatorComponent={DataLabelingSimulator}
                 />
                 </div>
            )
        },
        {
            id: "l1-learning-types",
            title: "محاكاة تفاعلية: التعلم الإشرافي وغير الإشرافي",
             content: (
                 <div className="space-y-4 text-lg leading-relaxed">
                    <p>هناك نموذجان رئيسيان للتعلم في تعلم الآلة، كل منهما يعتمد على نوع مختلف من البيانات.</p>
                 <SimulatorWithSteps
                    steps={[
                        "التعلم الإشرافي (Supervised): نُعطي النموذج بيانات مُعلّمة (مدخلات ومخرجات صحيحة) ليتعلم منها.",
                        "يتعلم النموذج العلاقة بين المدخلات والمخرجات.",
                        "بعد التدريب، يمكنه التنبؤ بالمخرجات الصحيحة لبيانات جديدة لم يرها من قبل.",
                        "---",
                        "التعلم غير الإشرافي (Unsupervised): نُعطي النموذج بيانات غير مُعلّمة.",
                        "يحاول النموذج اكتشاف الأنماط والهياكل المخفية في البيانات بنفسه.",
                        "يقوم بتجميع البيانات المتشابهة معًا في عناقيد (Clusters) بناءً على خصائصها المشتركة."
                    ]}
                    simulatorComponent={LearningSimulator}
                 />
                 </div>
            )
        },
        {
            id: "l1-lifecycle",
            title: "محاكاة تفاعلية: مراحل بناء مشروع ذكاء اصطناعي",
            content: (
                <SimulatorWithSteps
                  steps={[
                    "جمع البيانات (Data Collection): الخطوة الأولى هي جمع البيانات ذات الصلة بالمشكلة من مصادر متنوعة.",
                    "المعالجة المسبقة (Preprocessing): تنظيف وتنظيم البيانات، معالجة القيم المفقودة وإزالة الضوضاء لجعلها قابلة للاستخدام.",
                    "استخراج الميزات (Feature Extraction): تحويل البيانات (مثل النصوص أو الصور) إلى تمثيل رقمي يفهمه النموذج.",
                    "بناء وتدريب النموذج (Build & Train Model): اختيار الخوارزمية المناسبة وتدريبها على البيانات المعالجة.",
                    "تقييم النموذج (Evaluation): قياس أداء النموذج على بيانات لم يرها من قبل للتأكد من جودته وقدرته على التعميم.",
                    "النشر والاستخدام (Deployment): دمج النموذج في تطبيق حقيقي لخدمة المستخدمين النهائيين.",
                  ]}
                  simulatorComponent={ModelLifecycleSimulator}
                />
            )
        },
        {
          id: 'l1-exercise',
          title: 'تمرين موجه: استكشاف المفاهيم الأساسية',
          content: (
            <Accordion items={[
              {
                title: "الخطوة 1: استكشاف مهام تعلم الآلة",
                content: "اذهب إلى محاكاة 'فهم مهام تعلم الآلة'. تنقل بين الخطوات الثلاث (تصنيف، انحدار، تجميع) ولاحظ كيف يتغير التمثيل البصري. ما هو الفرق الرئيسي الذي تلاحظه في الهدف من كل مهمة؟"
              },
              {
                title: "الخطوة 2: سؤال توقعي",
                content: "في محاكاة 'التعلم الإشرافي وغير الإشرافي'، انتقل إلى وضع 'التعلم الإشرافي'. إذا أعطينا النموذج صورة كلب جديدة، ماذا تتوقع أن يكون الناتج؟ ولماذا؟"
              },
              {
                title: "الخطوة 3: التحليل",
                content: "النموذج سيتوقع 'كلب'. السبب هو أنه تعلم من البيانات المعلّمة مسبقًا والتي ربطت صور الكلاب بتسمية 'كلب'. هذا هو جوهر التعلم الإشرافي: التعلم من الأمثلة الصحيحة للتعميم على الحالات الجديدة."
              }
            ]}/>
          )
        },
        {
          id: "l1-summary",
          title: "ملخص واختبار قصير",
          content: (
            <>
              <p className="text-lg leading-relaxed mb-4">
                في هذه المحاضرة، استكشفنا تعريف الذكاء الاصطناعي، تاريخه، ومجالاته الرئيسية. تعلمنا الفرق بين البيانات المعلّمة وغير المعلّمة، وكيف يؤدي ذلك إلى نوعين من التعلم: الإشرافي وغير الإشرافي. أخيرًا، استعرضنا دورة حياة مشروع الذكاء الاصطناعي.
              </p>
              <Quiz questions={[
                {
                  question: "أي نوع من التعلم يتطلب بيانات ذات تسميات (labels) صحيحة؟",
                  options: ["التعلم الإشرافي", "التعلم غير الإشرافي", "التعلم المعزز"],
                  correctAnswerIndex: 0,
                  explanation: "التعلم الإشرافي يستخدم بيانات مُعلّمة (مدخلات ومخرجات صحيحة) لتدريب النموذج."
                },
                {
                  question: "ما هي المهمة التي تهدف إلى تجميع البيانات المتشابهة معًا؟",
                  options: ["التصنيف (Classification)", "الانحدار (Regression)", "التجميع (Clustering)"],
                  correctAnswerIndex: 2,
                  explanation: "التجميع (Clustering) هي مهمة تعلم غير إشرافي تهدف إلى اكتشاف مجموعات طبيعية في البيانات."
                }
              ]} />
            </>
          ),
        }
    ],
  },
  {
    id: "lecture-2",
    title: "المحاضرة الثانية: مكتبات Python للذكاء الاصطناعي: NumPy و Pandas",
    sections: [
        {
            id: "l2-intro",
            title: "مقدمة: أدواتك الأساسية لعلم البيانات",
            content: (
                <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                        أهداف هذه المحاضرة هي فهم الدور الحاسم لمكتبتي NumPy و Pandas في مشاريع الذكاء الاصطناعي، تعلم كيفية استخدامهما لمعالجة البيانات الرقمية والجدولية بكفاءة، وتطبيق أمثلة عملية تحاكي مشاكل واقعية.
                    </p>
                    <ul className="list-disc pr-6 space-y-2">
                        <li><strong>NumPy (Numerical Python):</strong> هي الأساس للعمليات الحسابية العلمية في Python. في الذكاء الاصطناعي، كل شيء تقريبًا (صور، نصوص، أصوات) يتم تحويله إلى مصفوفات من الأرقام. NumPy توفر هياكل بيانات سريعة وفعالة (Arrays) ودوال رياضية قوية للتعامل مع هذه المصفوفات.</li>
                        <li><strong>Pandas:</strong> مبنية على NumPy، وهي الأداة المثلى للتعامل مع البيانات الجدولية (مثل ملفات CSV أو جداول قواعد البيانات). في معالجة اللغات الطبيعية، نستخدم Pandas لتحميل، تنظيف، استكشاف، وتحليل مجموعات البيانات النصية قبل تدريب النماذج، كما رأينا في المحاضرة الأولى عند استعراض مراحل بناء المشروع.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "l2-numpy-deep-dive",
            title: "تعمق في NumPy: التعامل مع البيانات الرقمية",
            content: (
                <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white">1. إنشاء المصفوفات (Array Creation)</h4>
                    <p>المصفوفة (Array) في NumPy هي شبكة من القيم، كلها من نفس النوع. هي تشبه قوائم Python، لكنها أسرع بكثير وأكثر كفاءة في استخدام الذاكرة.</p>
                    <CritiqueBlock>
                      <p><strong>استخدام في الذكاء الاصطناعي:</strong> يتم تمثيل الصور كمصفوفات ثلاثية الأبعاد (عرض × ارتفاع × ألوان)، ومتجهات الكلمات (Word Embeddings) كمصفوفات ثنائية الأبعاد. كفاءة NumPy ضرورية لمعالجة هذه البيانات الضخمة.</p>
                    </CritiqueBlock>
                    <SimulatorWithSteps
                        steps={[
                            "np.zeros: لإنشاء مصفوفة مملوءة بالأصفار، مفيدة لتهيئة الأوزان في الشبكات العصبية.",
                            "np.ones: لإنشاء مصفوفة مملوءة بالآحاد.",
                            "np.arange: لإنشاء تسلسل رقمي، مثل إنشاء محور زمني لإشارة صوتية.",
                            "np.random.rand: لإنشاء مصفوفة بأرقام عشوائية، تستخدم غالبًا لتهيئة أوزان النماذج بشكل عشوائي.",
                        ]}
                        simulatorComponent={NumPyArrayCreator}
                    />

                    <h4 className="text-2xl font-bold text-white mt-8">2. خصائص المصفوفة (Array Attributes)</h4>
                    <p>بمجرد إنشاء مصفوفة، من المهم أن نفهم بنيتها. الخصائص (Attributes) توفر لنا بيانات وصفية حول المصفوفة.</p>
                     <CritiqueBlock>
                      <p><strong>استخدام في الذكاء الاصطناعي:</strong> قبل إدخال دفعة (batch) من الصور إلى نموذج تصنيف، نتحقق من `batch.shape` للتأكد من أنها بالأبعاد الصحيحة (e.g., 32 صور, 224 عرض, 224 ارتفاع, 3 ألوان).</p>
                    </CritiqueBlock>
                    <SimulatorWithSteps
                        steps={[
                            "المصفوفة الأصلية.",
                            "shape: يعرض أبعاد المصفوفة على شكل (صفوف, أعمدة).",
                            "size: يعرض العدد الإجمالي للعناصر.",
                            "ndim: يعرض عدد الأبعاد (المحاور).",
                            "dtype: يعرض نوع البيانات (e.g. int64, float32).",
                        ]}
                        simulatorComponent={NumPyAttributeExplorer}
                    />

                    <h4 className="text-2xl font-bold text-white mt-8">3. العمليات الحسابية (Vectorization)</h4>
                    <p>قوة NumPy الحقيقية تكمن في "Vectorization"، وهي القدرة على إجراء عمليات حسابية على مصفوفات بأكملها دفعة واحدة دون الحاجة إلى حلقات تكرارية (loops) في Python، مما يزيد السرعة بشكل هائل.</p>
                     <CritiqueBlock>
                        <p><strong>استخدام في الذكاء الاصطناعي:</strong> عند تطبيع بيانات صورة (تحويل قيم البكسل من 0-255 إلى 0-1)، نقوم ببساطة بقسمة مصفوفة الصورة بأكملها على 255 (`image_array / 255.0`). هذا أسرع بآلاف المرات من المرور على كل بكسل في حلقة تكرارية.</p>
                    </CritiqueBlock>
                    <GeminiCodeBlock
                        code={`
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# الجمع عنصر بعنصر
add_result = a + b 

# الضرب في قيمة ثابتة
multiply_result = a * 10

# حساب المتوسط
mean_a = np.mean(a)

print(f"a + b = {add_result}")
print(f"a * 10 = {multiply_result}")
print(f"Mean of a = {mean_a}")
                        `}
                    />
                </div>
            )
        },
         {
            id: "l2-pandas-deep-dive",
            title: "تعمق في Pandas: تنظيم وتحليل البيانات",
            content: (
                 <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white">1. هياكل البيانات: Series و DataFrame</h4>
                    <p>تقدم Pandas هيكلين أساسيين: الـ <strong>Series</strong> (عمود واحد، يشبه مصفوفة NumPy مع فهرس) والـ <strong>DataFrame</strong> (جدول متعدد الأعمدة، وهو الأكثر استخدامًا).</p>
                    <CritiqueBlock>
                        <p><strong>استخدام في الذكاء الاصطناعي:</strong> عند التعامل مع مجموعة بيانات نصية، يتم تحميلها عادةً في DataFrame حيث يكون لدينا عمود للنص (`text`) وعمود للتصنيف (`label`) مثل 'spam' أو 'ham'.</p>
                    </CritiqueBlock>
                    <SimulatorWithSteps
                        steps={[
                            "DataFrame: هو جدول كامل مكون من صفوف وأعمدة مفهرسة.",
                            "Series: عند اختيار عمود واحد ('العمر')، نحصل على كائن Series.",
                            "Row: عند اختيار صف واحد (الفهرس 1)، نحصل أيضًا على Series تمثل بيانات هذا الصف.",
                        ]}
                        simulatorComponent={({currentStep}) => <PandasDataFrameVisualizer 
                          data={{
                            'الاسم': ['أحمد', 'فاطمة', 'علي'],
                            'العمر': [25, 31, 22],
                            'المدينة': ['الرياض', 'جدة', 'الدمام']
                          }}
                          title="هيكل DataFrame"
                          currentStep={currentStep}
                        />}
                    />

                    <h4 className="text-2xl font-bold text-white mt-8">2. اختيار وتصفية البيانات (Boolean Indexing)</h4>
                    <p>
                        أقوى تقنية لاختيار البيانات في Pandas هي "الفهرسة المنطقية" (Boolean Indexing). الفكرة هي إنشاء Series من القيم المنطقية (True/False) بنفس طول DataFrame، ثم استخدام هذه الـ Series لاختيار الصفوف التي تقابل القيمة `True`.
                    </p>
                    <CritiqueBlock>
                        <p><strong>استخدام في الذكاء الاصطناعي:</strong> قبل تدريب نموذج تحليل المشاعر، قد نرغب في تصفية المراجعات التي تحتوي على أقل من 10 كلمات {`df[df['text'].str.len() > 10]`}، أو اختيار البيانات التي تنتمي لفئة معينة فقط {`df[df['label'] == 'positive']`}.</p>
                    </CritiqueBlock>
                    <h5 className="text-xl font-bold text-white mt-6">محاكاة تفاعلية: تصفية DataFrame</h5>
                    <p className="mb-4">جرّب تغيير القيم في المحاكي لترى كيف يتغير كود Python والنتيجة بشكل فوري. هذا يوضح العلاقة المباشرة بين الشرط الذي تبنيه والبيانات التي يتم اختيارها.</p>
                    <PandasFilteringSimulator />

                    <h4 className="text-2xl font-bold text-white mt-8">3. دمج شروط متعددة</h4>
                    <p>يمكنك دمج شروط متعددة باستخدام `&` (AND) و `|` (OR). من المهم وضع كل شرط بين قوسين `()` بسبب أولويات العمليات في Python.</p>
                    <GeminiCodeBlock
                        code={`
import pandas as pd

data = {'الاسم': ['أحمد', 'فاطمة', 'علي', 'نورة'],
        'العمر': [25, 31, 22, 35],
        'المدينة': ['الرياض', 'جدة', 'الرياض', 'الدمام']}
df = pd.DataFrame(data)

# اختيار سكان الرياض الذين تزيد أعمارهم عن 20 عامًا
riyadh_over_20 = df[(df['المدينة'] == 'الرياض') & (df['العمر'] > 20)]
print("--- سكان الرياض فوق سن الـ 20 ---")
print(riyadh_over_20)

# اختيار سكان جدة أو الدمام
jeddah_or_dammam = df[(df['المدينة'] == 'جدة') | (df['المدينة'] == 'الدمام')]
print("\\n--- سكان جدة أو الدمام ---")
print(jeddah_or_dammam)
                        `}
                    />
                 </div>
            )
        },
        {
          id: 'l2-exercise',
          title: 'تمرين موجه: تطبيق عملي',
          content: (
            <Accordion items={[
              {
                title: "الخطوة 1 (NumPy): سؤال توقعي",
                content: "لدينا مصفوفة `x = np.array([[1, 2], [3, 4]])`. ماذا تتوقع أن يكون ناتج `x * 2`؟ وماذا سيكون ناتج `x.shape`؟"
              },
              {
                title: "الخطوة 2 (NumPy): التحليل",
                content: "ناتج `x * 2` سيكون `[[2, 4], [6, 8]]` لأن عملية الضرب تتم على كل عنصر. ناتج `x.shape` سيكون `(2, 2)` لأنها مصفوفة 2x2."
              },
              {
                title: "الخطوة 3 (Pandas): سؤال توقعي",
                content: "بالنظر إلى DataFrame في قسم 'اختيار وتصفية البيانات'، ما هو الكود الذي ستكتبه لاختيار الأشخاص الذين هم ليسوا من مدينة 'الرياض'؟"
              },
              {
                title: "الخطوة 4 (Pandas): التحليل",
                content: "الكود الصحيح هو `df[df['المدينة'] != 'الرياض']`. نستخدم عامل `!=` (لا يساوي) لعكس الشرط والحصول على جميع الصفوف التي لا تطابق القيمة المحددة."
              }
            ]}/>
          )
        },
        {
          id: "l2-summary",
          title: "ملخص واختبار قصير",
          content: (
            <>
              <p className="text-lg leading-relaxed mb-4">
               في هذه المحاضرة، تعلمنا أساسيات مكتبتي NumPy و Pandas. رأينا كيف تمكننا NumPy من إجراء عمليات حسابية سريعة على المصفوفات الرقمية، وكيف تساعدنا Pandas في تنظيم وتحليل البيانات الجدولية بكفاءة. هاتان المكتبتان هما نقطة الانطلاق لأي مشروع عملي في الذكاء الاصطناعي.
              </p>
              <Quiz questions={[
                {
                  question: "ما هي الميزة الرئيسية لـ 'Vectorization' في NumPy؟",
                  options: ["تجعل الكود أطول", "تسمح بإجراء عمليات سريعة على مصفوفات كاملة بدون حلقات تكرارية", "تستخدم فقط للأعداد الصحيحة"],
                  correctAnswerIndex: 1,
                  explanation: "Vectorization هي جوهر سرعة NumPy، حيث تطبق العمليات على مستوى C/Fortran بدلاً من حلقات Python البطيئة."
                },
                {
                  question: "في Pandas، ما هو الناتج عند اختيار صف أو عمود واحد من DataFrame؟",
                  options: ["DataFrame آخر", "قائمة Python", "كائن Series"],
                  correctAnswerIndex: 2,
                  explanation: "دائمًا ما يكون الصف الواحد أو العمود الواحد من DataFrame عبارة عن كائن Series."
                }
              ]} />
            </>
          ),
        }
    ]
  },
   {
    id: "lecture-3",
    title: "المحاضرة الثالثة: تحميل ومعالجة البيانات",
    sections: [
      {
        id: "l3-intro",
        title: "مقدمة: أهمية البيانات النظيفة",
        content: (
           <div className="space-y-4 text-lg leading-relaxed">
                <p>
                    "القمامة تدخل، القمامة تخرج" (Garbage In, Garbage Out) هو مبدأ أساسي في تعلم الآلة. جودة النموذج الذي تبنيه تعتمد بشكل مباشر على جودة البيانات التي تدربه عليها. قضاء الوقت في تنظيف وفهم بياناتك هو استثمار حاسم لنجاح المشروع.
                </p>
                <p>
                    في هذه المحاضرة، سنتعلم كيفية تحميل مجموعة بيانات حقيقية (رسائل Spam/Ham) من مخزن UCI، واستكشافها، وتنظيفها باستخدام Pandas.
                </p>
            </div>
        )
      },
      {
        id: "l3-loading",
        title: "كود: تحميل واستكشاف البيانات",
        content: (
          <>
            <p className="text-lg mb-4">
                الخطوة الأولى هي تحميل البيانات إلى DataFrame في Pandas. سنستخدم `pd.read_csv`. بعد ذلك، نستخدم دوال مثل `.info()` و `.head()` و `.describe()` للحصول على نظرة أولية على البيانات.
            </p>
            <GeminiCodeBlock code={`
import pandas as pd

# تحميل البيانات من ملف. البيانات مفصولة بـ tab ولا يوجد صف ترويسة
# لذلك نحدد sep='\\t' و header=None
df = pd.read_csv('SMSSpamCollection.csv', sep='\\t', header=None, names=['label', 'text'])

# .info() يعطي ملخصًا سريعًا عن الأعمدة، عدد القيم غير الفارغة، ونوع البيانات
print("--- DataFrame Info ---")
df.info()

# .head() يعرض أول 5 صفوف
print("\\n--- First 5 Rows ---")
print(df.head())

# .describe() يعطي إحصاءات وصفية
print("\\n--- Descriptive Statistics ---")
print(df.describe(include='all'))
            `} />
          </>
        )
      },
      {
        id: "l3-cleaning",
        title: "كود: تنظيف البيانات (القيم المفقودة والمكررة)",
        content: (
           <>
            <p className="text-lg mb-4">
               البيانات الحقيقية غالبًا ما تكون فوضوية. خطوتان شائعتان في التنظيف هما التعامل مع القيم المفقودة (Missing Values) والصفوف المكررة (Duplicates).
            </p>
            <GeminiCodeBlock code={`
import pandas as pd
df = pd.read_csv('SMSSpamCollection.csv', sep='\\t', header=None, names=['label', 'text'])

# .isnull().sum() يحسب عدد القيم الفارغة (NaN) في كل عمود
print(f"Missing values before cleaning:\\n{df.isnull().sum()}\\n")

# .duplicated().sum() يحسب عدد الصفوف المكررة بالكامل
print(f"Duplicate rows before cleaning: {df.duplicated().sum()}\\n")

# .drop_duplicates() يزيل الصفوف المكررة
# inplace=True تعدل الـ DataFrame مباشرة
df.drop_duplicates(inplace=True)

# .dropna() يزيل الصفوف التي تحتوي على قيم فارغة
# df.dropna(inplace=True) # لا يوجد قيم فارغة في هذه البيانات، لكن هذا هو الكود

print(f"Shape after cleaning: {df.shape}")
print(f"Duplicate rows after cleaning: {df.duplicated().sum()}")
            `} />
          </>
        )
      },
       {
        id: "l3-visualization",
        title: "تصور البيانات: فهم التوزيع",
        content: (
          <>
            <p className="text-lg mb-4">
                بعد تنظيف البيانات، من المفيد تصورها لفهم خصائصها بشكل أفضل. على سبيل المثال، هل مجموعة البيانات متوازنة؟ (أي هل عدد رسائل الـ Spam والـ Ham متقارب؟).
            </p>
            <SimpleBarChart 
                title="توزيع رسائل Spam مقابل Ham"
                data={[
                    { label: 'ham', value: 4516, className: 'bg-green-500' },
                    { label: 'spam', value: 653, className: 'bg-red-500' }
                ]}
            />
            <CritiqueBlock>
                <p>نلاحظ أن مجموعة البيانات غير متوازنة بشكل كبير، حيث أن عدد رسائل "ham" أكبر بكثير من "spam". هذا قد يؤثر على أداء النموذج، حيث قد يميل إلى التنبؤ بالفئة الأكثر شيوعًا. هناك تقنيات لمعالجة عدم التوازن مثل (Oversampling) أو (Undersampling).</p>
            </CritiqueBlock>
          </>
        )
      },
      {
          id: 'l3-exercise',
          title: 'تمرين موجه: استكشاف البيانات',
          content: (
            <Accordion items={[
              {
                title: "الخطوة 1: تفسير النتائج",
                content: "قم بتشغيل كود 'تحميل واستكشاف البيانات'. بالنظر إلى ناتج `.info()`، كم عدد الإدخالات (الصفوف) الإجمالية في البيانات؟ وهل توجد أي قيم مفقودة؟"
              },
              {
                title: "الخطوة 2: سؤال توقعي",
                content: "قبل تشغيل كود 'تنظيف البيانات'، إذا كان لدينا 100 صف مكرر في بيانات حجمها 5000 صف، ماذا تتوقع أن يكون حجم البيانات (عدد الصفوف) بعد استخدام `df.drop_duplicates(inplace=True)`؟"
              },
              {
                title: "الخطوة 3: التحليل",
                content: "الحجم الجديد سيكون 4900 صف. دالة `drop_duplicates` تزيل جميع النسخ المكررة من الصفوف، مع الاحتفاظ بالظهور الأول لكل صف فريد."
              }
            ]}/>
          )
        },
        {
          id: "l3-summary",
          title: "ملخص واختبار قصير",
          content: (
            <>
              <p className="text-lg leading-relaxed mb-4">
               في هذه المحاضرة، تعلمنا الخطوات العملية لتحميل مجموعة بيانات باستخدام Pandas، وفحصها باستخدام دوال أساسية، وتنظيفها من خلال التعامل مع القيم المكررة والمفقودة، وأهمية تصور البيانات لفهم توزيعها.
              </p>
              <Quiz questions={[
                {
                  question: "أي دالة في Pandas تُستخدم لعرض أول 5 صفوف من DataFrame؟",
                  options: ["df.info()", "df.head()", "df.describe()"],
                  correctAnswerIndex: 1,
                  explanation: "df.head() تُستخدم لعرض الصفوف الأولى من DataFrame، بشكل افتراضي 5 صفوف."
                },
                {
                  question: "ماذا تفعل `df.isnull().sum()`؟",
                  options: ["تحذف الصفوف الفارغة", "تملأ القيم الفارغة بالصفر", "تحسب عدد القيم الفارغة في كل عمود"],
                  correctAnswerIndex: 2,
                  explanation: "هذه السلسلة من الأوامر تقوم أولاً بتحديد القيم الفارغة (`.isnull()`) ثم تجمعها لكل عمود (`.sum()`)."
                }
              ]} />
            </>
          ),
        }
    ]
  },
  {
    id: "lecture-4",
    title: "المحاضرة الرابعة: المعالجة المسبقة للنصوص",
    sections: [
        {
            id: "l4-intro",
            title: "مقدمة: من النص إلى البيانات المنظمة",
            content: (
                 <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                        النصوص البشرية غير منظمة بطبيعتها. لكي تتمكن نماذج تعلم الآلة من فهمها، يجب علينا أولاً تحويلها إلى شكل منظم. تتضمن هذه العملية عدة خطوات، تبدأ بالتنظيف والتقطيع (Tokenization).
                    </p>
                </div>
            )
        },
        {
            id: "l4-regex",
            title: "محاكاة تفاعلية: تنظيف النصوص باستخدام Regex",
            content: (
                <>
                    <p className="text-lg mb-4">
                        التعبيرات النمطية (Regular Expressions أو Regex) هي أداة قوية للبحث عن الأنماط واستبدالها في النصوص. نستخدمها لإزالة الأحرف غير المرغوب فيها مثل علامات الترقيم، الروابط، أو الأرقام.
                    </p>
                    <SimulatorWithSteps
                        steps={[
                            "النمط '\\d+' يطابق أي تسلسل من الأرقام.",
                            "النمط '[\\w\\.-]+@[\\w\\.-]+' يطابق عناوين البريد الإلكتروني."
                        ]}
                        simulatorComponent={RegexSimulator}
                    />
                </>
            )
        },
         {
            id: "l4-tokenization",
            title: "محاكاة تفاعلية: التقطيع (Tokenization): NLTK vs SpaCy",
            content: (
                 <>
                    <p className="text-lg mb-4">
                        التقطيع هو عملية تقسيم النص إلى وحدات أصغر تسمى "توكينات" (Tokens)، والتي يمكن أن تكون كلمات، أجزاء من كلمات، أو علامات ترقيم. NLTK و SpaCy هما أشهر مكتبتين لهذه المهمة في Python.
                    </p>
                    <TokenizationComparator />
                    <h4 className="text-xl font-bold text-white mt-8 mb-2">شرح الكود: التقطيع باستخدام NLTK</h4>
                    <AnnotatedCodeBlock
                        code={`
from nltk.tokenize import TreebankWordTokenizer

# 1. إنشاء نسخة من المُقطِّع
tokenizer = TreebankWordTokenizer()

# 2. النص المراد تقطيعه
text = "I can't believe it's 5:00 p.m.!"

# 3. تطبيق التقطيع
tokens = tokenizer.tokenize(text)

print(tokens)
# Output: ['I', 'ca', "n't", 'believe', 'it', "'s", '5:00', 'p.m.', '!']
                        `}
                        annotations={[
                            "نستورد الفئة المحددة `TreebankWordTokenizer` من مكتبة NLTK، وهي أداة تقطيع تتبع قواعد مجموعة بيانات Penn Treebank.",
                            "نقوم بإنشاء كائن (instance) من المُقطِّع. هذا الكائن يحتوي على المنطق والقواعد اللازمة لتقسيم النص.",
                            "نحدد النص الذي نريد معالجته في متغير.",
                            "نستدعي دالة `.tokenize()` على كائن المُقطِّع ونمرر لها النص. تقوم هذه الدالة بتطبيق قواعد Treebank لتقسيم النص وإرجاع قائمة بالتوكينات.",
                            "نطبع القائمة الناتجة لنرى كيف تم تقسيم النص. لاحظ كيف تم فصل `can't` إلى `ca` و `n't` و `it's` إلى `it` و `'s` بذكاء.",
                        ]}
                     />
                    <CritiqueBlock>
                        <p><strong>NLTK (Natural Language Toolkit):</strong> مكتبة أكاديمية وبحثية ممتازة، توفر وحدات بناء مرنة. تتطلب غالبًا خطوات متعددة لتحقيق مهمة واحدة.</p>
                        <p className="mt-2"><strong>SpaCy:</strong> مصممة للبيئات الإنتاجية، وهي أسرع وتوفر خط أنابيب معالجة متكامل (pipeline) يقوم بالتقطيع، تحليل أجزاء الكلام، والتعرف على الكيانات المسماة دفعة واحدة.</p>
                    </CritiqueBlock>
                </>
            )
        },
        {
            id: "l4-spacy-pipeline",
            title: "محاكاة تفاعلية: خط أنابيب SpaCy",
            content: (
                <>
                    <p className="text-lg mb-4">
                        عندما تعالج SpaCy نصًا، فإنها لا تقوم بالتقطيع فقط، بل تقوم بسلسلة من التحليلات اللغوية العميقة.
                    </p>
                    <SimulatorWithSteps
                        steps={[
                           "النص الأصلي يتم إدخاله إلى خط أنابيب SpaCy.",
                           "يقوم النموذج بتحليل النص بالكامل.",
                           "النتيجة هي كائن `Doc` غني بالمعلومات، يحتوي على التوكينات، جذورها (lemmas)، أنواعها (POS)، أدوارها النحوية (dependency)، والكيانات المسماة (NER)."
                        ]}
                        simulatorComponent={SpaCySimulator}
                    />
                </>
            )
        },
        {
            id: 'l4-exercise',
            title: 'تمرين موجه: التنظيف والتقطيع',
            content: (
                <Accordion items={[
                {
                    title: "الخطوة 1: تجربة Regex",
                    content: "في محاكاة 'تنظيف النصوص باستخدام Regex'، حاول كتابة نمط يطابق فقط علامة الدولار ($) متبوعة برقم. (تلميح: الدولار هو حرف خاص في Regex ويحتاج إلى تهريب باستخدام \\)."
                },
                {
                    title: "الخطوة 2: سؤال توقعي",
                    content: "في محاكاة 'التقطيع'، أدخل الجملة 'They're good friends.' ماذا تتوقع أن تكون نتيجة التقطيع؟ هل سيتم فصل 'They're' إلى 'They' و '’re'؟"
                },
                {
                    title: "الخطوة 3: التحليل",
                    content: "نعم، معظم أدوات التقطيع الجيدة (مثل SpaCy و NLTK) ستفصل 'They're' إلى 'They' و '’re'. هذا مهم لأن 're' هي اختصار لـ 'are' وتحمل معنى لغويًا منفصلاً."
                }
                ]}/>
            )
        },
        {
          id: "l4-summary",
          title: "ملخص واختبار قصير",
          content: (
            <>
              <p className="text-lg leading-relaxed mb-4">
                في هذه المحاضرة، تعلمنا الخطوات الأولى لمعالجة النصوص: التنظيف باستخدام التعبيرات النمطية (Regex) والتقطيع باستخدام مكتبات قوية مثل NLTK و SpaCy. استكشفنا أيضًا القدرات التحليلية المتقدمة لـ SpaCy.
              </p>
              <Quiz questions={[
                {
                  question: "ما هي عملية تقسيم النص إلى كلمات أو رموز فردية؟",
                  options: ["التنظيف", "التقطيع (Tokenization)", "التحليل"],
                  correctAnswerIndex: 1,
                  explanation: "التقطيع (Tokenization) هو الاسم الرسمي لعملية تقسيم النص إلى وحدات (توكينات)."
                },
                {
                  question: "أي مكتبة تعتبر أسرع ومصممة بشكل أفضل للبيئات الإنتاجية؟",
                  options: ["NLTK", "Regex", "SpaCy"],
                  correctAnswerIndex: 2,
                  explanation: "SpaCy معروفة بأدائها العالي وتصميمها الموجه للتطبيقات العملية والإنتاجية."
                }
              ]} />
            </>
          ),
        }
    ]
  },
  {
    id: "lecture-5-6",
    title: "المحاضرة 5 و 6: استخراج الميزات وتدريب النموذج",
    sections: [
        {
            id: "l56-intro",
            title: "مقدمة: تحويل الكلمات إلى أرقام",
            content: (
                 <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                        نماذج تعلم الآلة لا تفهم الكلمات، بل تفهم الأرقام فقط. لذلك، بعد تنظيف وتقطيع النص، تأتي الخطوة الحاسمة: <strong>استخراج الميزات (Feature Extraction)</strong>. هذه العملية تحول النص إلى تمثيل رقمي (متجه أو Vector) يمكن للنموذج استخدامه للتعلم.
                    </p>
                </div>
            )
        },
        {
            id: "l56-bow",
            title: "محاكاة تفاعلية: حقيبة الكلمات (Bag-of-Words)",
            content: (
                 <>
                    <p className="text-lg mb-4">
                        "حقيبة الكلمات" هي أبسط طريقة لتحويل النص إلى متجه رقمي. تتجاهل ترتيب الكلمات وتركز فقط على عدد مرات ظهور كل كلمة من "قاموس" محدد مسبقًا. كخطوة معالجة إضافية، غالبًا ما تتم إزالة "الكلمات الشائعة" (Stop Words) مثل "هو"، "في"، "على" لأنها لا تحمل معنى مميزًا.
                    </p>
                    <SimulatorWithSteps
                        steps={[
                            "نبدأ بنص الإدخال.",
                            "يتم تقطيع النص إلى كلمات.",
                            "تتم إزالة الكلمات الشائعة (Stop Words) غير المهمة.",
                            "يتم إنشاء متجه بنفس طول القاموس، حيث يمثل كل عنصر عدد مرات ظهور كلمة من القاموس في النص.",
                        ]}
                        simulatorComponent={BoWVisualizer}
                    />
                    <h4 className="text-xl font-bold text-white mt-8 mb-2">شرح الكود: حقيبة الكلمات مع Scikit-learn</h4>
                     <GeminiCodeBlock code={`
from sklearn.feature_extraction.text import CountVectorizer

corpus = [
    'this is the first document',
    'this document is the second document',
    'and this is the third one',
]

# 1. إنشاء نسخة من Vectorizer مع إزالة الكلمات الشائعة الإنجليزية
vectorizer = CountVectorizer(stop_words='english')

# 2. بناء القاموس وتحويل النصوص إلى متجهات
X = vectorizer.fit_transform(corpus)

# 3. عرض القاموس (الميزات)
print("Vocabulary: ", vectorizer.get_feature_names_out())

# 4. عرض المتجهات الرقمية
print("\\nMatrix:\\n", X.toarray())
                      `} />
                </>
            )
        },
        {
            id: "l56-tfidf",
            title: "تقنية متقدمة: TF-IDF (Term Frequency-Inverse Document Frequency)",
            content: (
                <>
                    <p className="text-lg leading-relaxed mb-4">
                        TF-IDF هي تقنية أكثر تطورًا من "حقيبة الكلمات". إنها لا تأخذ في الاعتبار تكرار الكلمة في المستند فحسب (TF)، بل تأخذ أيضًا في الاعتبار مدى ندرة هذه الكلمة عبر جميع المستندات الأخرى في المجموعة (IDF). الكلمات التي تظهر بشكل متكرر في مستند واحد ولكنها نادرة في المستندات الأخرى تحصل على درجة TF-IDF عالية، مما يشير إلى أهميتها.
                    </p>
                    <CritiqueBlock>
                        <p><strong>TF (Term Frequency):</strong> ما مدى تكرار الكلمة في هذا المستند؟</p>
                        <p className="mt-2"><strong>IDF (Inverse Document Frequency):</strong> ما مدى ندرة هذه الكلمة في جميع المستندات؟</p>
                    </CritiqueBlock>
                    <TFIDFVisualizer />
                    <h4 className="text-xl font-bold text-white mt-8 mb-2">شرح الكود: TF-IDF مع Scikit-learn</h4>
                    <GeminiCodeBlock code={`
from sklearn.feature_extraction.text import TfidfVectorizer

corpus = [
    'this is the first document',
    'this document is the second document',
    'and this is the third one',
]

# 1. إنشاء نسخة من Vectorizer
vectorizer = TfidfVectorizer(stop_words='english')

# 2. بناء القاموس وتحويل النصوص إلى متجهات TF-IDF
X = vectorizer.fit_transform(corpus)

# 3. عرض القاموس (الميزات)
print("Vocabulary: ", vectorizer.get_feature_names_out())

# 4. عرض مصفوفة TF-IDF
# (القيم ليست أعدادًا صحيحة، بل أوزان عشرية)
print("\\nTF-IDF Matrix:\\n", X.toarray().round(2))
                    `} />
                </>
            )
        },
        {
            id: "l56-training",
            title: "الخطوة 4 و 5: تدريب وتقييم النموذج",
            content: (
                 <>
                    <p className="text-lg mb-4">
                       الآن بعد أن أصبح لدينا ميزات رقمية (X) وتسميات (y)، يمكننا تدريب النموذج. سنقوم بتقسيم البيانات إلى مجموعة تدريب (لتدريب النموذج) ومجموعة اختبار (لتقييمه على بيانات لم يرها من قبل).
                    </p>
                    <GeminiCodeBlock code={`
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.preprocessing import LabelEncoder

# (افترض أن df هو الـ DataFrame النظيف من المحاضرة 3)
df = pd.read_csv('SMSSpamCollection_cleaned.csv')
df.dropna(inplace=True)

# 1. استخراج الميزات (Bag-of-Words)
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(df['text'])

# 2. تحويل التسميات النصية إلى أرقام (ham -> 0, spam -> 1)
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(df['label'])

# 3. تقسيم البيانات (80% تدريب, 20% اختبار)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. بناء وتدريب النموذج
model = DecisionTreeClassifier(random_state=42)
model.fit(X_train, y_train)

# 5. التقييم
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.4f}")

# طباعة تقرير التقييم ومصفوفة الالتباس
print("\\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=['ham', 'spam']))
print("\\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))
                    `} />
                    <h4 className="text-xl font-bold text-white mt-6 mb-4">محاكاة تفاعلية: فهم مصفوفة الالتباس</h4>
                    <p className="text-lg mb-4">
                        مصفوفة الالتباس هي أداة قوية لتقييم أداء نموذج التصنيف. إنها توضح أين كان النموذج على صواب وأين أخطأ.
                    </p>
                     <SimulatorWithSteps
                        steps={[
                           "هذه هي مصفوفة الالتباس لنموذجنا. المحور الرأسي يمثل القيم الحقيقية، والأفقي يمثل التوقعات.",
                           "TP (True Positive): توقع النموذج 'Spam' وكانت الرسالة 'Spam' بالفعل. (صحيح)",
                           "TN (True Negative): توقع النموذج 'Ham' وكانت الرسالة 'Ham' بالفعل. (صحيح)",
                           "FP (False Positive): توقع النموذج 'Spam' لكن الرسالة كانت 'Ham'. (خطأ - إنذار كاذب)",
                           "FN (False Negative): توقع النموذج 'Ham' لكن الرسالة كانت 'Spam'. (خطأ - تسللت رسالة مزعجة)",
                        ]}
                        simulatorComponent={({currentStep}) => <ConfusionMatrixVisualizer data={{ tp: 120, fp: 15, fn: 8, tn: 1242 }} currentStep={currentStep} />}
                    />
                     <CritiqueBlock>
                       <p>في مشكلة اكتشاف الرسائل المزعجة، يعتبر الخطأ من نوع FN (False Negative) هو الأخطر، لأنه يعني أن رسالة مزعجة قد تصل إلى صندوق الوارد للمستخدم. أما FP (False Positive) فهو مزعج أيضًا لأنه قد يرسل رسالة هامة إلى مجلد الرسائل المزعجة.</p>
                     </CritiqueBlock>
                </>
            )
        },
        {
            id: "l56-metrics",
            title: "مقاييس التقييم الأخرى: الدقة، الاستدعاء، و F1-Score",
            content: (
                <>
                    <p className="text-lg leading-relaxed mb-4">
                        الدقة (Accuracy) وحدها يمكن أن تكون مضللة، خاصة مع مجموعات البيانات غير المتوازنة (مثل بياناتنا التي تحتوي على رسائل 'ham' أكثر بكثير من 'spam'). لذلك، نستخدم مقاييس أخرى للحصول على صورة أكمل لأداء النموذج.
                    </p>
                    <div className="space-y-4 text-lg">
                        <div className="p-4 bg-slate-800/50 rounded-lg">
                            <h5 className="font-bold text-green-400">الدقة (Precision)</h5>
                            <p><strong>السؤال الذي تجيب عليه:</strong> من بين كل التنبؤات التي قام بها النموذج على أنها 'spam'، كم منها كان 'spam' بالفعل؟</p>
                            <p className="font-mono text-sm mt-1">TP / (TP + FP)</p>
                            <p className="mt-2 text-slate-400">الدقة العالية تعني عددًا أقل من الإنذارات الكاذبة (FP)، أي أن النموذج لا يصنف الرسائل الهامة على أنها مزعجة بشكل خاطئ.</p>
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded-lg">
                            <h5 className="font-bold text-blue-400">الاستدعاء (Recall / Sensitivity)</h5>
                            <p><strong>السؤال الذي تجيب عليه:</strong> من بين كل رسائل 'spam' الحقيقية، كم منها نجح النموذج في اكتشافها؟</p>
                            <p className="font-mono text-sm mt-1">TP / (TP + FN)</p>
                             <p className="mt-2 text-slate-400">الاستدعاء العالي يعني عددًا أقل من السلبيات الكاذبة (FN)، أي أن النموذج لا يفوت الكثير من الرسائل المزعجة.</p>
                        </div>
                         <div className="p-4 bg-slate-800/50 rounded-lg">
                            <h5 className="font-bold text-amber-400">F1-Score</h5>
                            <p>هو المتوسط التوافقي للدقة والاستدعاء، ويوفر مقياسًا واحدًا يوازن بينهما. يكون مفيدًا عندما نهتم بكل من الإنذارات الكاذبة والسلبيات الكاذبة.</p>
                        </div>
                    </div>
                     <CritiqueBlock>
                       <p><strong>المفاضلة (Trade-off):</strong> غالبًا ما يكون هناك مفاضلة بين الدقة والاستدعاء. إذا جعلت نموذجك شديد الحساسية لاكتشاف الرسائل المزعجة (لزيادة الاستدعاء)، فقد يبدأ في تصنيف الرسائل الهامة على أنها مزعجة (مما يقلل الدقة). العثور على التوازن الصحيح يعتمد على المشكلة.</p>
                     </CritiqueBlock>
                    <h4 className="text-xl font-bold text-white mt-8 mb-2">شرح تقرير التصنيف (Classification Report)</h4>
                    <p className="text-lg mb-4">
                        توفر مكتبة Scikit-learn دالة `classification_report` التي تلخص كل هذه المقاييس بشكل ملائم. هذا التقرير تمت طباعته في الخطوة السابقة.
                    </p>
                    <AnnotatedCodeBlock
                        language='text'
                        code={`
              precision    recall  f1-score   support

         ham       0.99      0.99      0.99       966
        spam       0.93      0.94      0.93       149

    accuracy                           0.98      1115
   macro avg       0.96      0.96      0.96      1115
weighted avg       0.98      0.98      0.98      1115
                        `}
                        annotations={[
                          "الدقة (precision) لـ 'spam': عندما يتوقع النموذج رسالة مزعجة، يكون صحيحًا بنسبة 93%.",
                          "الاستدعاء (recall) لـ 'spam': نجح النموذج في اكتشاف 94% من جميع الرسائل المزعجة الفعلية.",
                          "F1-score لـ 'spam': نتيجة 0.93 تشير إلى توازن جيد بين الدقة والاستدعاء لهذه الفئة.",
                          "الدعم (support): عدد العينات الفعلية لكل فئة في مجموعة الاختبار.",
                          "الدقة الإجمالية (accuracy): النسبة المئوية الإجمالية للتنبؤات الصحيحة (98%)."
                        ]}
                    />
                </>
            )
        },
        {
          id: 'l56-exercise',
          title: 'تمرين موجه: من النص إلى التقييم',
          content: (
            <Accordion items={[
              {
                title: "الخطوة 1: تجربة حقيبة الكلمات",
                content: "في محاكاة 'حقيبة الكلمات'، أدخل الجملة 'hello world hello'. ماذا تتوقع أن يكون شكل المتجه الرقمي الناتج (بافتراض أن 'hello' و 'world' في القاموس)؟"
              },
              {
                title: "الخطوة 2: سؤال توقعي",
                content: "بالنظر إلى 'مصفوفة الالتباس'، إذا كان هدفنا هو تقليل عدد الرسائل الهامة التي يتم تصنيفها خطأً على أنها مزعجة، على أي مقياس يجب أن نركز لتقليله: FP أم FN؟"
              },
              {
                title: "الخطوة 3: التحليل",
                content: "يجب أن نركز على تقليل FP (False Positive). هذا المقياس يمثل عدد المرات التي توقع فيها النموذج 'Spam' بينما كانت الرسالة في الواقع 'Ham' (هامة). تقليل هذا الرقم يعني تقليل عدد الإنذارات الكاذبة."
              }
            ]}/>
          )
        },
        {
          id: "l56-summary",
          title: "ملخص واختبار قصير",
          content: (
            <>
              <p className="text-lg leading-relaxed mb-4">
                في هاتين المحاضرتين، أكملنا دورة حياة مشروع تعلم الآلة. بدأنا بالنص النظيف، وأزلنا الكلمات الشائعة، ثم حولنا النص إلى متجهات رقمية باستخدام تقنية "حقيبة الكلمات". بعد ذلك، قمنا بتقسيم بياناتنا لتدريب وتقييم نموذج شجرة القرار، وتعلمنا كيفية تفسير نتائجه باستخدام مصفوفة الالتباس.
              </p>
              <Quiz questions={[
                {
                  question: "ما هو الهدف الرئيسي من تقنية 'حقيبة الكلمات' (Bag-of-Words)؟",
                  options: ["فهم معنى الجملة", "تصحيح الأخطاء الإملائية", "تحويل النص إلى تمثيل رقمي"],
                  correctAnswerIndex: 2,
                  explanation: "حقيبة الكلمات هي خوارزمية لاستخراج الميزات تحول النص إلى متجه من الأرقام بناءً على تكرار الكلمات."
                },
                {
                  question: "في مصفوفة الالتباس، ماذا يمثل 'True Positive' (TP)؟",
                  options: ["النموذج توقع 'إيجابي' وكانت الإجابة 'إيجابي'", "النموذج توقع 'سلبي' وكانت الإجابة 'إيجابي'", "النموذج توقع 'إيجابي' وكانت الإجابة 'سلبي'"],
                  correctAnswerIndex: 0,
                  explanation: "TP يمثل الحالات التي توقع فيها النموذج بشكل صحيح الفئة الإيجابية."
                }
              ]} />
            </>
          ),
        }
    ]
  },
  {
    id: "lecture-7",
    title: "المحاضرة السابعة: مقدمة في الشبكات العصبية",
    sections: [
        {
            id: "l7-intro",
            title: "مقدمة: ما هي الشبكة العصبية؟",
            content: (
                 <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                        الشبكات العصبية الاصطناعية (Artificial Neural Networks) هي فئة قوية من نماذج تعلم الآلة مستوحاة من بنية الدماغ البشري. تتكون من طبقات من "العصبونات" المترابطة التي تتعلم الأنماط المعقدة من البيانات. على عكس النماذج التقليدية، يمكن للشبكات العميقة (Deep Learning) تعلم الميزات تلقائيًا، مما يجعلها فعالة للغاية في مهام مثل التعرف على الصور وفهم اللغة.
                    </p>
                    <p>
                       في هذه المحاضرة، سنبدأ بأبسط وحدة بناء في أي شبكة عصبية: <strong>البرسبترون (Perceptron)</strong>، وهو نموذج لعصبون واحد.
                    </p>
                </div>
            )
        },
        {
            id: "l7-structure",
            title: "محاكاة تفاعلية: تشريح البرسبترون",
            content: (
                 <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                        البرسبترون هو الوحدة الأساسية في الشبكة العصبية. لفهم كيفية عمله، دعنا نفككه خطوة بخطوة. استخدم المحاكي أدناه لتغيير قيم المدخلات والأوزان والانحياز، ولاحظ كيف تتأثر الحسابات والناتج النهائي في الوقت الفعلي.
                    </p>
                     <SimulatorWithSteps
                        steps={[
                            "المكونات الأساسية هي المدخلات (x)، الأوزان (w)، والانحياز (b). الأوزان تحدد أهمية كل مدخل.",
                            "أولاً، نحسب 'المجموع المرجح' عن طريق ضرب كل مدخل في وزنه المقابل وجمع النتائج.",
                            "ثانياً، نضيف 'الانحياز' (Bias) إلى المجموع. الانحياز يعطي النموذج مرونة أكبر، مثل تحريك خط القرار.",
                            "النتيجة النهائية لهذه العملية هي 'z' أو 'المجموع المرجح' الكلي.",
                            "أخيراً، 'دالة التفعيل' البسيطة تقرر الناتج. إذا كانت 'z' أكبر من أو تساوي الصفر، يكون الناتج 1، وإلا يكون 0.",
                        ]}
                        simulatorComponent={PerceptronSimulator}
                    />
                </div>
            )
        },
        {
            id: "l7-mechanism",
            title: "آلية العمل: كيف تتعلم الشبكة؟",
            content: (
                <>
                    <p className="text-lg leading-relaxed mb-4">
                        التدريب هو عملية تكرارية لضبط الأوزان (<span className="font-mono text-green-300">w</span>) والانحياز (<span className="font-mono text-purple-300">b</span>) لتقليل الخطأ في التنبؤات. توضح المحاكاة التالية هذه العملية خطوة بخطوة لعينة تدريب واحدة.
                    </p>
                    <SimulatorWithSteps
                      steps={[
                        "الانتشار الأمامي: نحسب المجموع المرجح بضرب كل مدخل في وزنه وجمع النتائج مع الانحياز.",
                        "نطبق دالة التفعيل للحصول على التنبؤ.",
                        "حساب الخطأ: نقارن التنبؤ بالقيمة الحقيقية.",
                        "تحديث الأوزان: نستخدم الخطأ (إذا كان غير صفري) لتعديل الأوزان.",
                        "تحديث الانحياز: نقوم أيضًا بتحديث الانحياز. الأوزان والانحياز الجديدة أصبحت أفضل قليلاً.",
                      ]}
                      simulatorComponent={LearningMechanismSimulator}
                    />
                </>
            )
        },
        {
            id: "l7-simulation",
            title: "محاكاة تفاعلية: تدريب البرسبترون",
            content: (
                 <>
                    <p className="text-lg mb-4">
                        هذه المحاكاة المتقدمة توضح العملية المزدوجة للتعلم. على اليمين، سترى الحسابات الرياضية التفصيلية التي تحدث في كل خطوة. على اليسار، سترى التأثير المرئي لهذه الحسابات، حيث يتكيف "خط القرار" مع كل تحديث للأوزان ليناسب البيانات بشكل أفضل.
                    </p>
                    <SimulatorWithSteps
                        steps={[
                            "نبدأ بأوزان وانحياز عشوائيين، مما ينتج عنه خط قرار عشوائي.",
                            "الخطوة 1: نختار النقطة (2, 3).", "الانتشار الأمامي: نحسب التنبؤ.", "حساب الخطأ.", "تحديث الأوزان.",
                            "الخطوة 2: نختار النقطة (7, 8).", "الانتشار الأمامي.", "حساب الخطأ.", "تحديث الأوزان.",
                            "الخطوة 3: نختار النقطة (3, 4).", "الانتشار الأمامي.", "حساب الخطأ.", "تحديث الأوزان.",
                            "الخطوة 4: نختار النقطة (8, 9).", "الانتشار الأمامي.", "حساب الخطأ.", "تحديث الأوزان.",
                             "تستمر العملية... شاهد كيف يتحسن الخط تدريجيًا."
                        ]}
                        simulatorComponent={InteractivePerceptronTrainer}
                    />
                </>
            )
        },
        {
            id: "l7-code-example",
            title: "محاكاة تفاعلية: تدريب برسبترون لحل بوابة AND",
            content: (
                 <>
                    <p className="text-lg mb-4">
                       بدلاً من مجرد النظر إلى الكود، دعنا نرى عملية التدريب وهي تحدث خطوة بخطوة. توضح هذه المحاكاة كيف يقوم البرسبترون بتعديل أوزانه وانحيازه تدريجيًا لتعلم سلوك بوابة AND المنطقية، مرورًا بكل نقطة بيانات في كل دورة تدريب (Epoch).
                    </p>
                    <SimulatorWithSteps
                        steps={[
                            // Initial State
                            "نبدأ بأوزان وانحياز عشوائيين. خط القرار لا يفصل البيانات بشكل صحيح.",
                            // Epoch 1
                            "الدورة 1، النقطة (0,0): التنبؤ صحيح (0). لا يوجد تحديث.",
                            "الدورة 1، النقطة (0,1): التنبؤ صحيح (0). لا يوجد تحديث.",
                            "الدورة 1، النقطة (1,0): التنبؤ صحيح (0). لا يوجد تحديث.",
                            "الدورة 1، النقطة (1,1): التنبؤ خاطئ! (توقع 0 بدلاً من 1).",
                            "تحديث الأوزان: يتم تعديل الأوزان والانحياز. لاحظ كيف يتحرك الخط.",
                             // Epoch 2
                            "الدورة 2، النقطة (0,0): التنبؤ صحيح (0). لا يوجد تحديث.",
                            "الدورة 2، النقطة (0,1): التنبؤ صحيح (0). لا يوجد تحديث.",
                            "الدورة 2، النقطة (1,0): التنبؤ خاطئ! (توقع 1 بدلاً من 0).",
                            "تحديث الأوزان: يتم تعديل الخط مرة أخرى.",
                            "الدورة 2، النقطة (1,1): التنبؤ صحيح (1). لا يوجد تحديث.",
                             // Epoch 3
                             "الدورة 3، النقطة (0,0): صحيح.",
                             "الدورة 3، النقطة (0,1): صحيح.",
                             "الدورة 3، النقطة (1,0): صحيح.",
                             "الدورة 3، النقطة (1,1): صحيح. لقد تعلم النموذج الآن بنجاح!",
                        ]}
                        simulatorComponent={ANDGatePerceptronSimulator}
                    />
                </>
            )
        },
        {
          id: 'l7-exercise',
          title: 'تمرين موجه: تدريب البرسبترون',
          content: (
            <Accordion items={[
              {
                title: "الخطوة 1: مراقبة التعلم",
                content: "في محاكاة 'تدريب البرسبترون'، تقدم خطوة بخطوة. لاحظ كيف يتغير 'خط القرار' بشكل كبير عندما يخطئ النموذج في تصنيف نقطة بعيدة عن الخط."
              },
              {
                title: "الخطوة 2: سؤال توقعي",
                content: "في محاكاة 'بناء برسبترون'، إذا قمنا بزيادة `learning_rate` إلى 1.0، ماذا تتوقع أن يحدث لعملية التدريب؟ هل ستكون أسرع أم أكثر استقرارًا؟"
              },
              {
                title: "الخطوة 3: التحليل",
                content: "زيادة معدل التعلم بشكل كبير قد تجعل التدريب أسرع في البداية، ولكنه سيصبح غير مستقر. خط القرار قد 'يقفز' بشكل كبير مع كل تحديث، وقد يتجاوز الحل الأمثل مرارًا وتكرارًا دون أن يستقر عليه. معدل التعلم هو متغير مهم يتطلب الموازنة."
              }
            ]}/>
          )
        },
        {
          id: "l7-summary",
          title: "ملخص واختبار قصير",
          content: (
            <>
              <p className="text-lg leading-relaxed mb-4">
                في هذه المحاضرة، تعرفنا على الوحدة الأساسية للشبكات العصبية، البرسبترون. فهمنا مكوناته (المدخلات، الأوزان، الانحياز، دالة التفعيل) وكيف يتعلم من خلال تعديل أوزانه بناءً على الخطأ في توقعاته. هذا المفهوم البسيط هو أساس الشبكات العصبية العميقة الأكثر تعقيدًا.
              </p>
              <Quiz questions={[
                {
                  question: "ما هي المعلمات التي يقوم البرسبترون بتعلمها أثناء التدريب؟",
                  options: ["المدخلات والانحياز", "الأوزان والانحياز", "الأوزان والمدخلات"],
                  correctAnswerIndex: 1,
                  explanation: "الأوزان (weights) والانحياز (bias) هي المعلمات الداخلية التي يتم تعديلها أثناء التدريب لتناسب البيانات."
                },
                {
                  question: "ما هو دور دالة التفعيل في البرسبترون؟",
                  options: ["حساب مجموع المدخلات المرجح", "تحديد الناتج النهائي (0 أو 1)", "حساب الخطأ"],
                  correctAnswerIndex: 1,
                  explanation: "دالة التفعيل تأخذ المجموع المرجح كمدخل وتقرر ما إذا كان العصبون يجب أن 'يطلق إشارة' أم لا، أي تحديد الناتج النهائي."
                }
              ]} />
            </>
          ),
        }
    ]
  },
  {
    id: "lecture-8",
    title: "المحاضرة الثامنة: خوارزميات التقطيع المتقدمة",
    sections: [
        {
            id: "l8-intro",
            title: "مقدمة: ما وراء تقطيع الكلمات",
            content: (
                 <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                       التقطيع البسيط على مستوى الكلمات يواجه تحديات، مثل الكلمات غير الموجودة في القاموس (Out-of-Vocabulary)، والكلمات المعقدة التي تتكون من عدة أجزاء (مثل "unbelievable").
                    </p>
                    <p>
                       <strong>تقطيع الوحدات الفرعية (Subword Tokenization)</strong> هو الحل. تقوم هذه الخوارزميات بتقسيم الكلمات إلى وحدات أصغر ذات معنى، مثل "un", "##believe", "##able". هذا يسمح للنموذج بفهم الكلمات الجديدة من خلال أجزائها المكونة.
                    </p>
                </div>
            )
        },
        {
          id: "l8-definitions",
          title: "شرح تفصيلي للمصطلحات الرئيسية",
          content: (
            <div className="space-y-8 text-lg">
                
                {/* Word Tokenization */}
                <div>
                    <h4 className="text-2xl font-bold text-white mb-2">1. تقطيع الكلمات (Word Tokenization)</h4>
                    <p><strong>ما هو:</strong> الطريقة التقليدية لتقسيم النص بناءً على المسافات وعلامات الترقيم. كل كلمة تصبح "توكين".</p>
                    <p><strong>آلية العمل:</strong> "Hello, world!" → ["Hello", ",", "world", "!"]</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div className="bg-green-500/10 p-4 rounded-lg ring-1 ring-green-500/30">
                            <h5 className="font-bold text-green-300">مميزات</h5>
                            <ul className="list-disc pl-5 text-slate-300 mt-2">
                                <li>بسيط ومفهوم.</li>
                                <li>ينتج توكينات ذات معنى مباشر.</li>
                            </ul>
                        </div>
                        <div className="bg-red-500/10 p-4 rounded-lg ring-1 ring-red-500/30">
                            <h5 className="font-bold text-red-300">عيوب</h5>
                            <ul className="list-disc pl-5 text-slate-300 mt-2">
                                <li><strong>مشكلة OOV:</strong> فشل في التعامل مع الكلمات التي لم تكن في بيانات التدريب.</li>
                                <li><strong>حجم قاموس ضخم:</strong> يتطلب قاموسًا كبيرًا جدًا للغات الغنية.</li>
                                <li><strong>التشابه الصرفي:</strong> لا يفهم العلاقة بين "run" و "running".</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Character Tokenization */}
                <div>
                    <h4 className="text-2xl font-bold text-white mb-2">2. تقطيع الأحرف (Character Tokenization)</h4>
                    <p><strong>ما هو:</strong> تقسيم النص إلى أحرفه الفردية.</p>
                    <p><strong>آلية العمل:</strong> "cat" → ["c", "a", "t"]</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div className="bg-green-500/10 p-4 rounded-lg ring-1 ring-green-500/30">
                            <h5 className="font-bold text-green-300">مميزات</h5>
                            <ul className="list-disc pl-5 text-slate-300 mt-2">
                                <li>لا توجد مشكلة OOV أبدًا.</li>
                                <li>حجم قاموس صغير جدًا.</li>
                            </ul>
                        </div>
                        <div className="bg-red-500/10 p-4 rounded-lg ring-1 ring-red-500/30">
                            <h5 className="font-bold text-red-300">عيوب</h5>
                            <ul className="list-disc pl-5 text-slate-300 mt-2">
                                <li>يفقد المعنى الكامن في الكلمات.</li>
                                <li>ينتج تسلسلات طويلة جدًا، مما يزيد العبء الحسابي.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Subword Tokenization */}
                <div>
                    <h4 className="text-2xl font-bold text-white mb-2">3. تقطيع الوحدات الفرعية (Subword Tokenization)</h4>
                    <p><strong>ما هو:</strong> الحل الوسط المثالي. يتم تقسيم الكلمات الشائعة إلى توكينات كاملة، بينما يتم تقسيم الكلمات النادرة أو المعقدة إلى أجزاء أصغر ذات معنى.</p>
                    <p><strong>آلية العمل:</strong> "unbelievable" → ["un", "##believe", "##able"]</p>
                    <CritiqueBlock>
                        هذه هي الطريقة المعتمدة في معظم النماذج اللغوية الحديثة مثل GPT و BERT.
                    </CritiqueBlock>
                    
                    <div className="mt-6 space-y-4">
                        <div className="p-4 border-r-2 border-amber-400 bg-slate-800/50 rounded-r-lg">
                            <h5 className="font-bold text-amber-300">أ. خوارزمية Byte Pair Encoding (BPE)</h5>
                            <p className="mt-1">تبدأ الخوارزمية بقاموس من الأحرف الفردية. بعد ذلك، تقوم بشكل متكرر بالبحث عن الزوج الأكثر تكرارًا من الرموز في البيانات وتدمجهما في رمز جديد، ثم تضيف هذا الرمز الجديد إلى القاموس. تستمر هذه العملية لعدد محدد من عمليات الدمج.</p>
                        </div>
                         <div className="p-4 border-r-2 border-amber-400 bg-slate-800/50 rounded-r-lg">
                            <h5 className="font-bold text-amber-300">ب. خوارزمية MaxMatch</h5>
                            <p className="mt-1">هي خوارزمية "جشعة" (greedy). بالنظر إلى نص وقاموس محدد مسبقًا، تبدأ من بداية النص وتحاول العثور على أطول سلسلة من الأحرف تتطابق مع كلمة في القاموس. بمجرد العثور عليها، يتم اعتبارها توكين، وتستمر العملية من الحرف التالي.</p>
                        </div>
                        <div className="p-4 border-r-2 border-amber-400 bg-slate-800/50 rounded-r-lg">
                            <h5 className="font-bold text-amber-300">ج. خوارزمية Unigram Language Model</h5>
                            <p className="mt-1">على عكس BPE، تبدأ هذه الخوارزمية بمجموعة كبيرة جدًا من التوكينات المحتملة (كل الكلمات وأجزائها)، ثم تقوم بإزالة التوكينات الأقل أهمية تدريجيًا. يتم تقييم "أهمية" التوكين بناءً على مدى تأثير إزالته على احتمالية مجموعة البيانات وفقًا لنموذج لغوي بسيط (Unigram). تستخدم في T5 و XLNet.</p>
                        </div>
                    </div>
                </div>
            </div>
          )
        },
        {
            id: "l8-bpe-code",
            title: "محاكاة تفاعلية: خوارزمية Byte Pair Encoding (BPE)",
            content: (
                <>
                    <p className="text-lg mb-4">
                        خوارزمية BPE تبني قاموسها بشكل تدريجي. تبدأ بالأحرف الفردية، ثم تبحث عن زوج الرموز الأكثر تكرارًا وتدمجه في رمز جديد، وتكرر هذه العملية. توضح المحاكاة التالية هذه العملية خطوة بخطوة.
                    </p>
                    <SimulatorWithSteps
                        steps={[
                            "الحالة الأولية: نبدأ بقاموس مفكك إلى أحرف. يتم حساب تكرار كل زوج من الرموز المتجاورة.",
                            "الدمج 1: الزوج الأكثر تكرارًا هو ('e', 's'). يتم دمجه ليصبح 'es' ويتم تحديث القاموس.",
                            "الدمج 2: بعد التحديث، الزوج الأكثر تكرارًا الآن هو ('es', 't'). يتم دمجه.",
                            "الدمج 3: العملية تتكرر. الزوج التالي هو ('n', 'e'). يتم دمجه.",
                            "الدمج 4: الزوج التالي هو ('ne', 'w'). يتم دمجه.",
                            "الدمج 5: الزوج التالي هو ('l', 'o'). يتم دمجه.",
                            "تستمر الخوارزمية في دمج الأزواج الأكثر شيوعًا لبناء قاموس من الوحدات الفرعية."
                        ]}
                        simulatorComponent={BPESimulator}
                    />
                </>
            )
        },
        {
            id: "l8-maxmatch-sim",
            title: "محاكاة تفاعلية: خوارزمية MaxMatch",
            content: (
                <>
                    <p className="text-lg mb-4">
                        خوارزمية MaxMatch هي خوارزمية "جشعة" (greedy). تبدأ من بداية السلسلة وتحاول العثور على أطول كلمة في القاموس تتطابق مع بداية السلسلة.
                    </p>
                    <SimulatorWithSteps
                        steps={[
                            "نبدأ من بداية النص 'unbelievable'.",
                            "نبحث عن أطول تطابق في القاموس. نجد 'un'.",
                            "نضيف 'un' إلى قائمة التوكينات وننتقل إلى ما بعده.",
                            "النص المتبقي هو 'believable'. نجد أطول تطابق وهو 'believe'.",
                            "نضيف 'believe' إلى التوكينات وننتقل.",
                            "النص المتبقي هو 'able'. نجد تطابق 'able'.",
                            "نضيف 'able' وننتهي.",
                        ]}
                        simulatorComponent={MaxMatchVisualizer}
                    />
                     <AnnotatedCodeBlock
                        language='pseudocode'
                        code={`
function max_match(text, dictionary):
  tokens = []
  i = 0
  while i < len(text):
    // 1. Find longest match starting at i
    longest_match = ""
    for j from len(text) down to i:
      substring = text[i:j+1]
      if substring in dictionary and len(substring) > len(longest_match):
        longest_match = substring
    
    // 2. Add to tokens and update index
    if longest_match == "": // Handle no match
      longest_match = text[i] // Take single character
    
    tokens.append(longest_match)
    i += len(longest_match)
    
  return tokens
                        `}
                        annotations={[
                          "نهيئ قائمة فارغة للتوكينات ومؤشرًا `i` لبداية النص.",
                          "نبدأ حلقة تستمر طالما لم نصل إلى نهاية النص.",
                          "في كل مرة، نبحث بشكل جشع عن أطول سلسلة ممكنة من الأحرف تبدأ من المؤشر `i` وتكون موجودة في القاموس.",
                          "إذا وجدنا تطابقًا، نضيفه إلى قائمة التوكينات ونقوم بتحديث المؤشر `i` ليتجاوز الكلمة التي وجدناها.",
                          "إذا لم نجد أي تطابق، نأخذ حرفًا واحدًا فقط، نضيفه كتوكين، ونحرك المؤشر خطوة واحدة للأمام.",
                          "نعيد قائمة التوكينات النهائية بعد الانتهاء من النص بأكمله."
                        ]}
                    />
                </>
            ),
        },
        {
            id: "l8-transformers",
            title: "ما بعد التقطيع: مقدمة في نماذج Transformer",
            content: (
                <>
                    <p className="text-lg leading-relaxed mb-4">
                        إن خوارزميات تقطيع الوحدات الفرعية مثل BPE لم تكن مجرد تحسين تقني، بل كانت الأساس الذي مكّن من ظهور بنية نموذجية ثورية: الـ <strong>Transformer</strong>، التي تم تقديمها في ورقة بحثية شهيرة بعنوان "Attention Is All You Need" عام 2017.
                    </p>
                    <h4 className="text-2xl font-bold text-white mt-6 mb-4">آلية الانتباه الذاتي (Self-Attention): المكون السحري</h4>
                    <p className="text-lg leading-relaxed mb-4">
                        على عكس النماذج السابقة التي كانت تعالج الكلمات بشكل تسلسلي، تسمح آلية الانتباه الذاتي للنموذج بالنظر إلى جميع الكلمات الأخرى في الجملة في نفس الوقت عند معالجة كلمة معينة. يقوم النموذج بتعيين "درجة انتباه" لكل كلمة أخرى، مما يحدد مدى أهميتها لفهم الكلمة الحالية في سياقها.
                    </p>
                    <div className="my-6 p-4 bg-slate-800/50 rounded-lg ring-1 ring-slate-700 text-lg">
                        <p className="text-slate-400 mb-2 font-bold">مثال توضيحي:</p>
                        <div className="text-center font-sans text-xl p-4 bg-gray-950 rounded-md" dir="ltr">
                            "The robot delivered the package. <span className="relative inline-block">
                            <span className="text-cyan-400 font-bold">It</span>
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-cyan-500 text-black px-2 py-0.5 rounded-full whitespace-nowrap">Refers to 'package'</span>
                            <svg className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 text-cyan-500" viewBox="0 0 8 4"><path d="M4 4 L0 0 L8 0 Z" fill="currentColor"></path></svg>
                            </span> was heavy."
                        </div>
                        <p className="mt-3 text-slate-300">
                            عند معالجة كلمة "It"، تتيح آلية الانتباه الذاتي للنموذج إعطاء وزن انتباه أعلى لكلمة "package" مقارنة بكلمة "robot"، مما يمكنه من فهم أن الضمير يعود إلى الطرد.
                        </p>
                    </div>
                     <CritiqueBlock>
                      <p>
                        <strong>لماذا سيطرت نماذج Transformer؟</strong><br/>
                        السبب الرئيسي هو قدرتها على <strong>المعالجة المتوازية (Parallelization)</strong>. بما أن كل كلمة تُعالج بالنظر إلى جميع الكلمات الأخرى في نفس الوقت، يمكن تدريب هذه النماذج على وحدات معالجة الرسومات (GPUs) بكفاءة هائلة، مما سمح ببناء نماذج أكبر وأكثر قوة.
                      </p>
                    </CritiqueBlock>
                    <p className="text-lg leading-relaxed mt-4">
                        هذه البنية القوية هي الأساس لنماذج اللغة الحديثة التي نستخدمها اليوم، مثل <strong>BERT</strong> (من Google) و <strong>GPT</strong> (من OpenAI)، والتي أحدثت ثورة في مجال معالجة اللغات الطبيعية.
                    </p>
                </>
            )
        },
         {
          id: 'l8-exercise',
          title: 'تمرين موجه: خوارزميات التقطيع',
          content: (
            <Accordion items={[
              {
                title: "الخطوة 1: تجربة MaxMatch",
                content: "في محاكاة 'خوارزمية MaxMatch'، القاموس هو ['un', 'believe', 'able', 'a', 'b', ...]. إذا كان النص هو 'unable'، ما هي التوكينات التي ستنتجها الخوارزمية؟"
              },
              {
                title: "الخطوة 2: سؤال توقعي",
                content: "لماذا تعتبر خوارزميات الوحدات الفرعية (Subword) مثل BPE أفضل من تقطيع الكلمات التقليدي للغات مثل التركية أو الألمانية التي تحتوي على كلمات مركبة طويلة؟"
              },
              {
                title: "الخطوة 3: التحليل",
                content: "لأن BPE يمكنها تقسيم الكلمات المركبة الطويلة إلى وحداتها المكونة ذات المعنى (مثل 'güvenlik' -> 'güven' + 'lik' في التركية). هذا يسمح للنموذج بفهم معنى الكلمة المركبة حتى لو لم يرها من قبل، بدلاً من اعتبارها كلمة فريدة خارج القاموس (OOV)."
              }
            ]}/>
          )
        },
        {
          id: "l8-summary",
          title: "ملخص واختبار قصير",
          content: (
            <>
              <p className="text-lg leading-relaxed mb-4">
                في هذه المحاضرة، تعمقنا في عالم تقطيع النصوص. تعلمنا عن قيود تقطيع الكلمات التقليدي واستكشفنا بدائل قوية مثل تقطيع الأحرف والوحدات الفرعية (Subword). ركزنا على فهم آلية عمل خوارزميات مثل MaxMatch و BPE، والتي تعتبر أساسية في النماذج اللغوية الحديثة مثل BERT و GPT.
              </p>
              <Quiz questions={[
                {
                  question: "ما هي الميزة الرئيسية لتقطيع الوحدات الفرعية (Subword Tokenization)؟",
                  options: ["أسرع من تقطيع الكلمات", "يحل مشكلة الكلمات خارج القاموس (OOV)", "ينتج عددًا أقل من التوكينات"],
                  correctAnswerIndex: 1,
                  explanation: "بتقسيم الكلمات غير المعروفة إلى أجزاء معروفة، يمكن للنموذج التعامل مع أي كلمة تقريبًا، مما يقلل بشكل كبير من مشكلة OOV."
                },
                {
                  question: "خوارزمية BPE تبني قاموسها عن طريق:",
                  options: ["البحث عن أطول تطابق", "تقسيم الكلمات عند المسافات", "دمج أزواج الرموز الأكثر تكرارًا بشكل متكرر"],
                  correctAnswerIndex: 2,
                  explanation: "BPE هي خوارزمية تعلمية تبدأ من الأحرف وتدمج الأزواج الأكثر شيوعًا لبناء قاموس من الوحدات الفرعية."
                }
              ]} />
            </>
          ),
        }
    ]
  },
  {
    id: "about-page",
    title: "حول الموقع",
    sections: [
      {
        id: "about-intro",
        title: "مقدمة",
        content: (
          <div className="flex flex-col md:flex-row items-center gap-8 text-lg">
            <div className="flex-shrink-0">
               <div className="p-4 bg-cyan-500/10 rounded-full ring-4 ring-cyan-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
               </div>
            </div>
            <p className="leading-relaxed">
              تم إعداد هذا الموقع وتطويره بواسطة <strong>يعقوب المهاجري</strong>، بهدف تقديم شرح تفاعلي وشامل لمقررات الذكاء الاصطناعي وNLP.
            </p>
          </div>
        ),
      },
      {
        id: "about-objective",
        title: "الهدف من الموقع",
        content: (
          <p className="text-lg leading-relaxed">
            تم تصميم الموقع ليتيح للطلاب تجربة تعليمية عملية، تشمل الشرح التفصيلي، الأمثلة العملية، الأكواد التنفيذية، والمحاكاة التفاعلية لكل مصطلح.
          </p>
        ),
      },
      {
        id: "about-features",
        title: "أهم المميزات",
        content: (
          <ul className="space-y-4 text-lg">
            {[
              { icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "شرح موسع لكل مفهوم في المحاضرات" },
              { icon: "M17 8l4 4m0 0l-4 4m4-4H3", text: "أمثلة محلولة خطوة بخطوة" },
              { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", text: "أكواد Python مع شرح كامل" },
              { icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", text: "محاكاة تفاعلية لتعديل القيم ورؤية النتائج مباشرة" },
              { icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z", text: "ربط المحتوى بين المحاضرات لتسهيل الفهم" }
            ].map((feature, index) => (
              <li key={index} className="flex items-center p-3 bg-slate-800/50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 ml-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                </svg>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        ),
      }
    ],
  },
];
