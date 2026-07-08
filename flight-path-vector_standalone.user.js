// ==UserScript==
// @name                GeoFS-V3.9_Flight-Path-Vector
// @name:vi             GeoFS-V3.9_Đường-Bay-Véc-Tơ
// @name:zh-CN          GeoFS-V3.9_飞行路径矢量
// @name:zh-TW          GeoFS-V3.9_飛行路徑向量
// @name:ja             GeoFS-V3.9_飛行経路ベクトル
// @name:ko             GeoFS-V3.9_비행-경로-벡터
// @name:fr             GeoFS-V3.9_Vecteur-De-Trajectoire-De-Vol
// @name:de             GeoFS-V3.9_Flugpfad-Vektor
// @name:es             GeoFS-V3.9_Vector-De-Ruta-De-Vuelo
// @name:pt-BR          GeoFS-V3.9_Vetor-De-Trajetória-De-Vôo
// @name:pt-PT          GeoFS-V3.9_Vetor-De-Trajetória-De-Voo
// @name:ru             GeoFS-V3.9_Вектор-Траектории-Полета
// @name:ar             GeoFS-V3.9_ناقل-مسار-الرحلة
// @name:tr             GeoFS-V3.9_Uçuş-Yolu-Vektör
// @name:id             GeoFS-V3.9_Vektor-Jalur-Penerbangan
// @name:th             GeoFS-V3.9_เวกเตอร์เส้นทางการบิน
// @name:pl             GeoFS-V3.9_Wektor-Ścieżki-Lotu
// @name:nl             GeoFS-V3.9_Vluchtroute-Vector
// @name:it             GeoFS-V3.9_Vettore-Del-Percorso-Di-Volo
// @name:sv             GeoFS-V3.9_Flygväg-Vektor
// @name:da             GeoFS-V3.9_Flyvesti-Vektor
// @name:fi             GeoFS-V3.9_Lentoreittivektori
// @name:nb             GeoFS-V3.9_Flybanevektor
// @name:cs             GeoFS-V3.9_Vektor-Dráhy-Letu
// @name:hu             GeoFS-V3.9_Repülési-Útvonal-Vektor
// @name:ro             GeoFS-V3.9_Vector-Cale-De-Zbor
// @name:uk             GeoFS-V3.9_Траєкторія-Польоту-Вектор
// @name:hi             GeoFS-V3.9_उड़ान-पथ-वेक्टर
// @name:bn             GeoFS-V3.9_ফ্লাইট-পাথ-ভেক্টর
// @name:fa             GeoFS-V3.9_وکتور-مسیر-پرواز
// @name:he             GeoFS-V3.9_וקטור-נתיב-טיסה
// @name:ms             GeoFS-V3.9_Vektor-Laluan-Penerbangan
// @name:fil            GeoFS-V3.9_Vector-Ng-Landas-Ng-Paglipad
// @name:el             GeoFS-V3.9_Διάνυσμα-Διαδρομής-Πτήσης
// @name:hr             GeoFS-V3.9_Vektor-Putanje-Leta
// @name:sk             GeoFS-V3.9_Vektor-Dráhy-Letu
// @name:bg             GeoFS-V3.9_Вектор-На-Траекторията-На-Полета
// @name:sr             GeoFS-V3.9_Вектор-Путање-Лета
// @name:lt             GeoFS-V3.9_Skrydžio-Maršruto-Vektorius
// @name:lv             GeoFS-V3.9_Lidojuma-Ceļa-Vektors
// @name:et             GeoFS-V3.9_Lennutee-Vektor
// @name:sl             GeoFS-V3.9_Vektor-Poti-Leta
// @name:ca             GeoFS-V3.9_Vector-De-Ruta-De-Vol
// @name:af             GeoFS-V3.9_Vlugpad-Vektor
// @name:sw             GeoFS-V3.9_Vector-Ya-Njia-Ya-Ndege
// @name:zu             GeoFS-V3.9_I-Flight-Path-Vector
// @name:mn             GeoFS-V3.9_Нислэгийн-Замын-Вектор
// @name:my             GeoFS-V3.9_ပျံသန်းမှုလမ်းကြောင်း-Vector
// @name:km             GeoFS-V3.9_វ៉ិចទ័រផ្លូវហោះហើរ
// @name:lo             GeoFS-V3.9_ເສັ້ນທາງການບິນ-Vector
// @name:ur             GeoFS-V3.9_فلائٹ-پاتھ-ویکٹر

// @description         Precision HUD Flight Path Vector (FPV) for GeoFS. Shows true velocity vector projection for improved landing and maneuver precision. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:vi      Vector đường bay HUD chính xác (FPV) cho GeoFS. Hiển thị phép chiếu vectơ vận tốc thực để cải thiện độ chính xác khi hạ cánh và cơ động. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-CN   GeoFS 的精确 HUD 飞行路径矢量 (FPV)。显示真实的速度矢量投影，以提高着陆和机动精度。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-TW   GeoFS 的精確 HUD 飛行路徑向量 (FPV)。顯示真實的速度向量投影，以提高著陸和機動精度。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ja      GeoFS 用の高精度 HUD 飛行経路ベクトル (FPV)。着陸と操縦の精度を向上させるための真の速度ベクトル投影を表示します。 © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ko      GeoFS용 정밀 HUD 비행 경로 벡터(FPV). 향상된 착륙 및 기동 정밀도를 위한 실제 속도 벡터 투영을 보여줍니다. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fr      Vecteur de trajectoire de vol HUD de précision (FPV) pour GeoFS. Affiche une projection vectorielle de vitesse réelle pour une meilleure précision d'atterrissage et de manœuvre. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:de      Präzisions-HUD-Flugpfadvektor (FPV) für GeoFS. Zeigt die Projektion des echten Geschwindigkeitsvektors für eine verbesserte Lande- und Manöverpräzision. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:es      Vector de ruta de vuelo (FPV) HUD de precisión para GeoFS. Muestra una proyección del vector de velocidad real para mejorar la precisión del aterrizaje y las maniobras. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-BR   Vetor de trajetória de voo HUD de precisão (FPV) para GeoFS. Mostra projeção vetorial de velocidade real para melhor precisão de pouso e manobra. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-PT   Vetor de trajetória de voo HUD de precisão (FPV) para GeoFS. Mostra projeção vetorial de velocidade real para melhor precisão de aterragem e manobra. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ru      Прецизионный вектор траектории полета HUD (FPV) для GeoFS. Показывает истинную проекцию вектора скорости для повышения точности приземления и маневрирования. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ar      ناقل مسار الطيران HUD الدقيق (FPV) لـ GeoFS. يُظهر إسقاطًا حقيقيًا لمتجه السرعة لتحسين دقة الهبوط والمناورة. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:tr      GeoFS için Hassas HUD Uçuş Yolu Vektörü (FPV). Geliştirilmiş iniş ve manevra hassasiyeti için gerçek hız vektör projeksiyonunu gösterir. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:id      Vektor Jalur Penerbangan HUD Presisi (FPV) untuk GeoFS. Menunjukkan proyeksi vektor kecepatan sebenarnya untuk meningkatkan presisi pendaratan dan manuver. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:th      เวกเตอร์เส้นทางการบิน HUD ที่แม่นยำ (FPV) สำหรับ GeoFS แสดงเส้นโครงเวกเตอร์ความเร็วจริงเพื่อการลงจอดและความแม่นยำในการเคลื่อนตัวที่ดีขึ้น © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:pl      Precyzyjny wektor ścieżki lotu HUD (FPV) dla GeoFS. Pokazuje wektor rzeczywistej prędkości, co poprawia precyzję lądowania i manewrów. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:nl      Precisie HUD Flight Path Vector (FPV) voor GeoFS. Toont ware snelheidsvectorprojectie voor verbeterde landings- en manoeuvreerprecisie. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:it      Precisione HUD Flight Path Vector (FPV) per GeoFS. Mostra la proiezione vettoriale della velocità reale per una migliore precisione di atterraggio e manovra. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sv      Precision HUD Flight Path Vector (FPV) för GeoFS. Visar verklig hastighetsvektorprojektion för förbättrad landnings- och manöverprecision. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:da      Precision HUD Flight Path Vector (FPV) til GeoFS. Viser ægte hastighedsvektorprojektion for forbedret landings- og manøvrepræcision. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fi      Precision HUD Flight Path Vector (FPV) GeoFS:lle. Näyttää todellisen nopeusvektoriprojektion laskeutumisen ja ohjauksen tarkkuuden parantamiseksi. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:nb      Precision HUD Flight Path Vector (FPV) for GeoFS. Viser ekte hastighetsvektorprojeksjon for forbedret landings- og manøverpresisjon. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:cs      Přesný vektor letové dráhy HUD (FPV) pro GeoFS. Ukazuje skutečnou vektorovou projekci rychlosti pro lepší přistání a přesnost manévrů. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hu      Precíziós HUD repülési útvonal vektor (FPV) a GeoFS-hez. Valódi sebességvektor-vetítést mutat a jobb leszállás és manőver pontosság érdekében. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ro      Precision HUD Flight Path Vector (FPV) pentru GeoFS. Afișează proiecția vectorului de viteză reală pentru o precizie îmbunătățită de aterizare și manevră. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:uk      Precision HUD Flight Path Vector (FPV) для GeoFS. Показує проекцію вектора справжньої швидкості для покращеної точності приземлення та маневру. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hi      जियोएफएस के लिए प्रिसिजन एचयूडी फ्लाइट पाथ वेक्टर (एफपीवी)। बेहतर लैंडिंग और पैंतरेबाज़ी परिशुद्धता के लिए वास्तविक वेग वेक्टर प्रक्षेपण दिखाता है। © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:bn      GeoFS-এর জন্য যথার্থ HUD ফ্লাইট পাথ ভেক্টর (FPV)। উন্নত অবতরণ এবং ম্যানুভার নির্ভুলতার জন্য সত্য বেগ ভেক্টর অভিক্ষেপ দেখায়। © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fa      بردار مسیر پرواز دقیق HUD (FPV) برای GeoFS. پیش بینی بردار سرعت واقعی را برای بهبود فرود و دقت مانور نشان می دهد. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:he      Precision HUD Flight Path Vector (FPV) עבור GeoFS. מציג הקרנת וקטור מהירות אמיתית לשיפור דיוק הנחיתה והתמרון. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ms      Vektor Laluan Penerbangan HUD Ketepatan (FPV) untuk GeoFS. Menunjukkan unjuran vektor halaju sebenar untuk pendaratan dan ketepatan gerakan yang lebih baik. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:fil     Precision HUD Flight Path Vector (FPV) para sa GeoFS. Nagpapakita ng tunay na velocity vector projection para sa pinahusay na landing at katumpakan ng maniobra. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:el      Precision HUD Flight Path Vector (FPV) για GeoFS. Εμφανίζει διανυσματική προβολή πραγματικής ταχύτητας για βελτιωμένη ακρίβεια προσγείωσης και ελιγμών. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:hr      Precizni HUD vektor putanje leta (FPV) za GeoFS. Prikazuje projekciju vektora prave brzine za poboljšano slijetanje i preciznost manevra. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sk      Presný vektor letovej dráhy HUD (FPV) pre GeoFS. Zobrazuje skutočnú vektorovú projekciu rýchlosti pre lepšie pristátie a presnosť manévrov. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:bg      Precision HUD Flight Path Vector (FPV) за GeoFS. Показва реална векторна проекция на скоростта за подобрено приземяване и прецизност на маневрирането. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sr      Прецизни ХУД вектор путање лета (ФПВ) за ГеоФС. Приказује пројекцију вектора праве брзине за побољшано слетање и прецизност маневара. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lt      Tikslus HUD skrydžio kelio vektorius (FPV), skirtas GeoFS. Rodo tikrojo greičio vektoriaus projekciją, kad būtų pagerintas tūpimas ir manevro tikslumas. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lv      Precīzijas HUD lidojuma ceļa vektors (FPV) GeoFS. Parāda patieso ātruma vektora projekciju, lai uzlabotu nosēšanās un manevra precizitāti. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:et      Täppis HUD lennutee vektor (FPV) GeoFS-i jaoks. Näitab tõelist kiirusvektori projektsiooni, et parandada maandumist ja manöövri täpsust. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sl      Precision HUD Flight Path Vector (FPV) za GeoFS. Prikazuje projekcijo vektorja prave hitrosti za izboljšano natančnost pri pristajanju in manevriranju. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ca      Vector de trajectòria de vol HUD de precisió (FPV) per a GeoFS. Mostra una projecció vectorial de velocitat real per millorar la precisió d'aterratge i maniobra. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:af      Precision HUD Flight Path Vector (FPV) vir GeoFS. Toon ware snelheidsvektorprojeksie vir verbeterde landings- en maneuverpresisie. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:sw      Precision HUD Flight Path Vector (FPV) kwa GeoFS. Inaonyesha makadirio ya vekta ya kasi ya kweli kwa usahihi wa kutua na ujanja ulioboreshwa. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:zu      I-Precision HUD Flight Path Vector (FPV) ye-GeoFS. Ibonisa ukuqagela kwevector yesivinini sangempela sokufika okuthuthukisiwe nokunemba kokuqondisa. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:mn      GeoFS-д зориулсан нарийвчлалын HUD нислэгийн замын вектор (FPV). Буух, маневр хийх нарийвчлалыг сайжруулахын тулд жинхэнэ хурдны вектор проекцийг харуулна. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:my      GeoFS အတွက် တိကျသော HUD ပျံသန်းမှုလမ်းကြောင်း (FPV)။ ပိုမိုကောင်းမွန်သော ဆင်းသက်ခြင်းနှင့် တိကျစွာ ပြေးလွှားခြင်းအတွက် စစ်မှန်သော အမြန်နှုန်း ကွက်ကွက်ကို ပြသသည်။ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:km      Precision HUD Flight Path Vector (FPV) សម្រាប់ GeoFS ។ បង្ហាញ​ការ​ព្យាករ​វ៉ិចទ័រ​ល្បឿន​ពិត​សម្រាប់​ការ​ធ្វើ​ឱ្យ​ប្រសើរ​ឡើង​នូវ​ការ​ចុះចត និង​ភាព​ជាក់លាក់​នៃ​ការ​ធ្វើ​សមយុទ្ធ។ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:lo      Precision HUD Flight Path Vector (FPV) ສໍາລັບ GeoFS. ສະ​ແດງ​ການ​ຄາດ​ຄະ​ເນ vector ຄວາມ​ໄວ​ທີ່​ແທ້​ຈິງ​ສໍາ​ລັບ​ການ​ປັບ​ປຸງ​ການ​ລົງ​ຈອດ​ແລະ​ຄວາມ​ແມ່ນ​ຍໍາ maneuver​. © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.
// @description:ur      جیو ایف ایس کے لیے پریسجن HUD فلائٹ پاتھ ویکٹر (FPV)۔ بہتر لینڈنگ اور پینتریبازی کی درستگی کے لیے حقیقی رفتار ویکٹر پروجیکشن دکھاتا ہے۔ © 2026 _init. Part of the GeoFS-V3.9_Ecosystem.

// @require             https://update.greasyfork.org/scripts/581510/code.js
// @require             https://update.greasyfork.org/scripts/581511/code.js

// @homepageURL         https://sites.google.com/view/geofs-v39-ecosystem/home
// @connect             greasyfork.org
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          safari
// @compatible          brave
// @compatible          opera
// @copyright           2026, _init (https://greasyfork.org/users/1594049)

// @namespace           https://greasyfork.org/users/1594049
// @version             2.0.0
// @author              _init
// @icon                https://geofs-assets.evengao6688.workers.dev/icons/flight-path-vector.png
// @match               https://www.geo-fs.com/geofs.php*
// @match               https://*.geo-fs.com/geofs.php*
// @grant               none
// @license             MIT
// ==/UserScript==

function cF(x, y, z) {
    return { x, y, z };
}
function waitForEntities() {
    try {
        if (geofs.api) {
            // Entities are already defined, no need to wait
            window.DEGREES_TO_RAD = window.DEGREES_TO_RAD || 0.017453292519943295769236907684886127134428718885417254560971914401710091146034494436822415696345094822123044925073790592483854692275281012398474218934047117319168245015010769561697553581238605305168789;
            window.RAD_TO_DEGREES = window.RAD_TO_DEGREES || 57.295779513082320876798154814105170332405472466564321549160243861202847148321552632440968995851110944186223381632864893281448264601248315036068267863411942122526388097467267926307988702893110767938261;
            main();
            return;
        }
    } catch (error) {
        // Handle any errors (e.g., log them)
        console.log('Error in waitForEntities:', error);
    }
    // Retry after 1000 milliseconds
    setTimeout(waitForEntities, 1000);
}
window.lastLoc = null;
window.onload = setTimeout(waitForEntities, 10000);
window.howFar = 15; //                                THIS DETERMINES HOW FAR AWAY THE DOT IS. IT IS A FACTOR, AND THE ACTUAL DISTANCE IS DIRECTLY RELATED TO THE TRUE AIRSPEED.
function main() {
    (function() {
        'use strict';
        if (window.V39_NOTIF) window.V39_NOTIF.success("GeoFS-V3.9_Flight-Path-Vector V2.0.0 Loaded.");
        const initialLoc = Cesium.Cartesian3.fromDegrees(geofs.camera.lla[1], geofs.camera.lla[0], (geofs.animation.values.groundElevationFeet/3.2808399));

        window.y = geofs.api.viewer.entities.add({
            position: initialLoc,
            billboard: {
                image: "https://tylerbmusic.github.io/GPWS-files_geofs/fpv.png",
                scale: 0.03 * (1/geofs.api.renderingSettings.resolutionScale),
            },
        });
        if (geofs.api.renderingSettings.resolutionScale <= 0.6) {
            window.y.billboard.image = 'https://tylerbmusic.github.io/GPWS-files_geofs/fpv_lowres.png';
        }
        
        window.lastLoc = Cesium.Cartesian3.fromDegrees(geofs.camera.lla[1], geofs.camera.lla[0], geofs.camera.lla[2]);

        // Update display
        function updateFlightDataDisplay() {
            if (geofs.isPaused()) {
                return;
            }

            // Check if geofs.animation.values is available
            if (geofs.animation.values && geofs.aircraft.instance && geofs.aircraft.instance.llaLocation) {
                const ac = geofs.aircraft.instance;
                const currLoc = Cesium.Cartesian3.fromDegrees(geofs.camera.lla[1], geofs.camera.lla[0], geofs.camera.lla[2]);

                let targetPos = null;

                if (window.lastLoc) {
                    const dx = currLoc.x - window.lastLoc.x;
                    const dy = currLoc.y - window.lastLoc.y;
                    const dz = currLoc.z - window.lastLoc.z;

                    if (dx + dy + dz !== 0) {
                        targetPos = cF(
                            currLoc.x + window.howFar * dx,
                            currLoc.y + window.howFar * dy,
                            currLoc.z + window.howFar * dz
                        );
                    }
                }

                window.lastLoc = currLoc;

                // Retrieve and format the required values
                var agl = (geofs.animation.values.altitude !== undefined && geofs.animation.values.groundElevationFeet !== undefined) ? Math.round((geofs.animation.values.altitude - geofs.animation.values.groundElevationFeet) + (geofs.aircraft.instance.collisionPoints[geofs.aircraft.instance.collisionPoints.length - 2].worldPosition[2]*3.2808399)) : 'N/A';
                var glideslope;
                if (geofs.animation.getValue("NAV1Direction") && (geofs.animation.getValue("NAV1Distance") !== 600)) { //The second part to the if statement prevents the divide by 0 error.
                    glideslope = (geofs.animation.getValue("NAV1Direction") === "to") ? (Math.atan((agl*0.3048) / (geofs.animation.getValue("NAV1Distance")+600))*RAD_TO_DEGREES).toFixed(1) : (Math.atan((agl*0.3048) / Math.abs(geofs.animation.getValue("NAV1Distance")-600))*RAD_TO_DEGREES).toFixed(1); //The center of the aiming point is exactly 600 meters from the start of the runway (in GeoFS).
                } else {
                    glideslope = 'N/A';
                }

                let reticleColor = Cesium.Color.LIME; // Default: Bright HUD Lime Green
                const aoa = geofs.animation.values.aoa;
                const vs = geofs.animation.values.verticalSpeed; // in ft/min, downward is negative
                const isWarningState = (aoa !== undefined && aoa > 14) || ac.stalling;

                if (isWarningState) {
                    reticleColor = Cesium.Color.RED;
                } else if (vs !== undefined) {
                    const maxVS = 3000;
                    const clampedVS = Math.max(-maxVS, Math.min(maxVS, vs));
                    let hue = 120; // 120 is Green
                    if (clampedVS > 0) {
                        // Gradual transition from green (120) to sky-blue/cyan (200) during climb
                        hue = 120 + (clampedVS / maxVS) * 80;
                    } else {
                        // Gradual transition from green (120) to warning red (0) during descent
                        hue = 120 + (clampedVS / maxVS) * 120; // clampedVS is negative, this subtracts from 120
                    }
                    reticleColor = Cesium.Color.fromHsl(hue / 360, 1.0, 0.5);
                }

                if (window.y) {
                    window.y.show = window.fpvEnabled;
                    if (window.y.billboard) {
                        window.y.billboard.color = reticleColor;
                    }
                }

                if (targetPos) {
                    window.y.position = targetPos;
                }

                // Display css
                var flightDataElement = document.getElementById('flightDataDisplay0');
                if (!flightDataElement) {
                    flightDataElement = document.createElement('div');
                    flightDataElement.id = 'flightDataDisplay0';
                    flightDataElement.style.position = 'fixed';
                    flightDataElement.style.bottom = '40px';
                    flightDataElement.style.right = 'calc(10px + 48px + 16px)';
                    flightDataElement.style.height = '36px';
                    flightDataElement.style.minWidth = '64px';
                    flightDataElement.style.padding = '0 16px';
                    flightDataElement.style.display = 'inline-block';
                    flightDataElement.style.fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
                    flightDataElement.style.fontSize = '14px';
                    flightDataElement.style.textTransform = 'uppercase';
                    flightDataElement.style.overflow = 'hidden';
                    flightDataElement.style.willChange = 'box-shadow';
                    flightDataElement.style.transition = 'box-shadow .2s cubic-bezier(.4,0,1,1), background-color .2s cubic-bezier(.4,0,.2,1), color .2s cubic-bezier(.4,0,.2,1)';
                    flightDataElement.style.textAlign = 'center';
                    flightDataElement.style.lineHeight = '36px';
                    flightDataElement.style.verticalAlign = 'middle';
                    flightDataElement.style.zIndex = '9999';
                    document.body.appendChild(flightDataElement);
                }

                flightDataElement.innerHTML = `
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">Glideslope ${glideslope}</span>
            `;
            }
        }

        // Update flight data display every 100ms
        window.fpvEnabled = true;
        setInterval(updateFlightDataDisplay, (geofs.debug.fps ? (1/(Number(geofs.debug.fps)))+5 : 100)); //The +5 gives a buffer and the : 100 is an attempt to prevent a huge lag spike on touchdown that I was encountering.
        document.addEventListener('keydown', function(event) {
            if (event.key === 'l') {
                window.fpvEnabled = !window.fpvEnabled;
                if (window.y) {
                    window.y.show = window.fpvEnabled;
                }
            }
        });
    })();
}
