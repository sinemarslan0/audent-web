/**
 * Altınbaş University Faculty of Dentistry - AUDSA
 * DENTISTRY 5.0: DİJİTALDEN BİREYSELE SEMPOZYUMU
 * Core Data File (Resmi PDF Kaynakları ve Güncel Veriler)
 */

const symposiumData = {
  event: {
    title: {
      tr: "DENTISTRY 5.0: DİJİTALDEN BİREYSELE",
      en: "DENTISTRY 5.0: FROM DIGITAL TO PERSONALIZED"
    },
    subTitle: {
      tr: "Modern Diş Hekimliğinde Yenilikçi ve Bireyselleştirilmiş Yaklaşımlar Sempozyumu",
      en: "Symposium on Innovative and Personalized Approaches in Modern Dentistry"
    },
    organizer: {
      tr: "Altınbaş Üniversitesi Diş Hekimliği Fakültesi Öğrenci Kulübü (AUDSA)",
      en: "Altinbas University Faculty of Dentistry Student Association (AUDSA)"
    },
    motto: {
      tr: "Bilim • İnovasyon • İnsan Odaklı Diş Hekimliği — Daha sağlıklı yarınlar için...",
      en: "Science • Innovation • Human-Centered Dentistry — For healthier tomorrows..."
    },
    dates: {
      tr: "5 Aralık 2026",
      en: "December 5, 2026"
    },
    targetCountdownDate: "2026-12-05T09:00:00+03:00",
    registrationFormUrl: "https://forms.gle/BFu1sdK98rwNL6zg8",
    venue: {
      name: {
        tr: "Altınbaş Üniversitesi Bakırköy Yerleşkesi & Altınbaş Diş Hastanesi",
        en: "Altinbas University Bakirkoy Campus & Altinbas Dental Hospital"
      },
      hall: {
        tr: "Büyük Oditoryum & Klinik Hands-on Üniteleri",
        en: "Grand Auditorium & Clinical Hands-on Suites"
      },
      address: {
        tr: "Zuhuratbaba Mah. İncirli Cad. No:11, 34147 Bakırköy / İstanbul",
        en: "Zuhuratbaba Mah. Incirli Cad. No:11, 34147 Bakirkoy / Istanbul"
      }
    }
  },

  stats: [
    {
      id: "speakers",
      number: "7+",
      icon: "mic",
      title: { tr: "Seçkin Konuşmacı", en: "Keynote Speakers" },
      desc: { tr: "Alanında öncü akademisyenler ve klinik uzmanlar", en: "Leading academicians and clinical specialists" }
    },
    {
      id: "workshops",
      number: "2",
      icon: "activity",
      title: { tr: "Özel Hands-on Eğitim", en: "Special Hands-on Courses" },
      desc: { tr: "20'şer kişilik sınırlı kontenjanla birebir klinik uygulama", en: "Strictly limited to 20 seats each with hands-on practice" }
    },
    {
      id: "attendees",
      number: "500+",
      icon: "users",
      title: { tr: "Seçkin Katılımcı", en: "Prestigious Attendees" },
      desc: { tr: "Öğrenciler, asistan hekimler ve klinisyenler", en: "Students, resident dentists & clinical practitioners" }
    },
    {
      id: "certificate",
      number: "100%",
      icon: "award",
      title: { tr: "Akredite Sertifika", en: "Accredited Certificate" },
      desc: { tr: "Fakülte ve AUDSA onaylı resmi katılım belgesi", en: "Official verified certificate & CPD credits" }
    }
  ],

  // 7 Resmi Konuşmacı (Resmi PDF Biyografileri ve Yüksek Çözünürlüklü Portreleri)
  speakers: [
    {
      id: "selim-pamuk",
      name: "Prof. Dr. Selim Pamuk",
      title: {
        tr: "Protetik Diş Tedavisi Uzmanı & EDAD Kurucusu",
        en: "Prosthodontics Specialist, Founder of EDAD & IFED Board Member"
      },
      institution: {
        tr: "İstanbul Üniversitesi Diş Hekimliği Fakültesi (E.) & EDAD",
        en: "Istanbul University Faculty of Dentistry (Ret.) & EDAD"
      },
      topic: {
        tr: "Dijitalden Bireysele: Protetik Restorasyonlarda Biyomimetik ve Estetik Yaklaşımlar",
        en: "From Digital to Individual: Biomimetic and Aesthetic Approaches in Prosthetic Restorations"
      },
      bio: {
        tr: "Galatasaray Lisesi’nin ardından İstanbul Üniversitesi Diş Hekimliği Fakültesi’nden mezun olmuş ve Prostetik Diş Tedavisi Anabilim Dalı Kuron-Köprü Protezleri Bilim Dalı’nda doktora eğitimini tamamlamıştır. Akademik kariyerinde doçentlik ve profesörlük unvanlarını alarak uzun yıllar İstanbul Üniversitesi Diş Hekimliği Fakültesi’nde öğretim üyesi olarak görev yapmıştır. EDAD’ın kurucuları arasında yer alan ve başkanlığını da yürüten Prof. Dr. Pamuk, aynı zamanda IFED yönetim kurulu üyesidir. İmplantoloji, estetik diş hekimliği ve dijital diş hekimliği başlıca ilgi ve çalışma alanlarıdır.",
        en: "Following Galatasaray High School, he graduated from Istanbul University Faculty of Dentistry and completed his doctorate in Department of Prosthodontics, Crown-Bridge Prostheses division. After earning Associate Professor and Professor titles, he taught for many years at Istanbul University. A founder and former president of EDAD (Aesthetic Dentistry Academy), Prof. Dr. Pamuk is also a board member of IFED. His core expertise includes implantology, aesthetic dentistry, and digital workflows."
      },
      image: "assets/speakers/selim_pamuk.jpg",
      badge: "Protetik & Estetik",
      category: "keynote",
      time: "10:00 - 10:45",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "selim.pamuk@altinbas.edu.tr"
      }
    },
    {
      id: "korkmaz-sayinsu",
      name: "Prof. Dr. Korkmaz Sayınsu",
      title: {
        tr: "Ortodonti Uzmanı & Öğretim Üyesi",
        en: "Orthodontics Specialist & Professor"
      },
      institution: {
        tr: "Altınbaş Üniversitesi Diş Hekimliği Fakültesi Ortodonti A.D.",
        en: "Altinbas University Faculty of Dentistry, Department of Orthodontics"
      },
      topic: {
        tr: "Modern Ortodontide Şeffaf Plak Biyomekaniği ve 3D Tedavi Planlama",
        en: "Clear Aligner Biomechanics and 3D Treatment Planning in Modern Orthodontics"
      },
      bio: {
        tr: "Marmara Üniversitesi Diş Hekimliği Fakültesi’nden mezun olduktan sonra aynı üniversitenin Ortodonti Anabilim Dalı’nda doktora eğitimini tamamlamıştır. Akademik kariyerine Yeditepe Üniversitesi’nde devam ederek Yardımcı Doçent ve Doçent unvanlarını almış, daha sonra Altınbaş Üniversitesi Diş Hekimliği Fakültesi Ortodonti Anabilim Dalı’nda Profesör olarak görev yapmıştır. Akademik ve klinik çalışmalarını özellikle ortodontik tedavi, ortognatik cerrahi ve temporomandibular eklem odaklı tedaviler üzerine sürdürmektedir. Ulusal ve uluslararası eğitim programlarında eğitmen olarak görev almakta, bilimsel toplantı ve kurslarda aktif olarak yer almaktadır.",
        en: "Graduated from Marmara University Faculty of Dentistry and earned his PhD from the same university's Department of Orthodontics. He continued his academic career at Yeditepe University earning Assistant and Associate Professor titles, later serving as Professor at Altinbas University Department of Orthodontics. His clinical and research focus centers on orthodontic therapy, orthognathic surgery, and TMJ management, actively lecturing in national and international forums."
      },
      image: "assets/speakers/korkmaz_sayinsu.jpg",
      badge: "Ortodonti & 3D Planlama",
      category: "keynote",
      time: "11:00 - 11:45",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "korkmaz.sayinsu@altinbas.edu.tr"
      }
    },
    {
      id: "nuray-yilmaz-altintas",
      name: "Prof. Dr. Nuray Yılmaz Altıntaş",
      title: {
        tr: "Ağız, Diş ve Çene Cerrahisi Uzmanı & Öğretim Üyesi",
        en: "Oral & Maxillofacial Surgery Specialist & Associate Professor"
      },
      institution: {
        tr: "Altınbaş Üniversitesi Diş Hekimliği Fakültesi Çene Cerrahisi A.D.",
        en: "Altinbas University Faculty of Dentistry, Maxillofacial Surgery Dept."
      },
      topic: {
        tr: "Çene Cerrahisinde İleri Ogmentasyon ve Biyolojik İmplant Protokolleri",
        en: "Advanced Augmentation & Biological Implant Protocols in Maxillofacial Surgery"
      },
      bio: {
        tr: "Marmara Üniversitesi Diş Hekimliği Fakültesi’nden mezun olduktan sonra Karadeniz Teknik Üniversitesi Ağız, Diş ve Çene Cerrahisi Anabilim Dalı’nda uzmanlık ve akademik eğitimini tamamlamıştır. Akademik kariyerine Karadeniz Teknik Üniversitesi’nde devam ederek Yardımcı Doçent ve Doçent unvanlarını almış, Ohio State Üniversitesi’nde gözlemci araştırmacı olarak bulunmuştur. Halen Altınbaş Üniversitesi Ağız, Diş ve Çene Cerrahisi Anabilim Dalı’nda görev yapan Prof. Dr. Altıntaş, AÇBİD, EACMFS ve EAO gibi ulusal ve uluslararası mesleki kuruluşların üyesidir.",
        en: "After graduating from Marmara University Faculty of Dentistry, she completed her specialization and academic training at Karadeniz Technical University Department of Oral and Maxillofacial Surgery. She served as Assistant and Associate Professor there and worked as a visiting scholar at Ohio State University. Currently faculty at Altinbas University, she is an active member of ACBİD, EACMFS, and EAO."
      },
      image: "assets/speakers/nuray_yilmaz_altintas.jpg",
      badge: "Çene Cerrahisi & İmplantoloji",
      category: "keynote",
      time: "12:00 - 12:45",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "nuray.altintas@altinbas.edu.tr"
      }
    },
    {
      id: "subutay-han-altintas",
      name: "Prof. Dr. Subutay Han Altıntaş",
      title: {
        tr: "Protetik Diş Tedavisi Uzmanı & Öğretim Üyesi",
        en: "Prosthodontics Specialist & Professor"
      },
      institution: {
        tr: "İstanbul Aydın Üniversitesi & Nişantaşı Kliniği",
        en: "Istanbul Aydin University & Nisantasi Clinic"
      },
      topic: {
        tr: "Kişiselleştirilmiş Protetik Planlama ve Biyomalzeme Dinamikleri",
        en: "Personalized Prosthetic Planning and Biomaterial Dynamics"
      },
      bio: {
        tr: "Marmara Üniversitesi Diş Hekimliği Fakültesi’nden mezun olduktan sonra Selçuk Üniversitesi Protetik Diş Tedavisi Anabilim Dalı’nda doktora eğitimini tamamlamıştır. Akademik kariyerine Karadeniz Teknik Üniversitesi’nde başlayan Altıntaş, doçentlik ve profesörlük unvanlarını almıştır. Finlandiya Oulu Üniversitesi ve Ohio State Üniversitesi’nde akademik çalışmalar ve araştırmalar gerçekleştirmiş; lazer uygulamaları üzerine çeşitli uluslararası eğitim ve sertifika programlarını tamamlamıştır. Ulusal ve uluslararası dergilerde yayımlanmış çok sayıda bilimsel çalışması ve kongre ödülleri bulunan Prof. Dr. Altıntaş, halen İstanbul Aydın Üniversitesi’nde profesör olarak görev yapmakta ve Nişantaşı’ndaki kliniğinde çalışmalarını sürdürmektedir.",
        en: "Graduated from Marmara University Faculty of Dentistry and completed his PhD at Selcuk University Department of Prosthodontics. Beginning his career at KTU, he achieved Associate Professor and Professor ranks. He conducted international research at University of Oulu (Finland) and Ohio State University, completing laser dentistry certifications. Widely published with numerous congress awards, he currently serves as Professor at Istanbul Aydin University and practices at his clinic in Nisantasi."
      },
      image: "assets/speakers/subutay_han_altintas.jpg",
      badge: "Protetik & Biyomalzemeler",
      category: "keynote",
      time: "13:30 - 14:15",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "subutay.altintas@altinbas.edu.tr"
      }
    },
    {
      id: "mehmet-ferit-erel",
      name: "Dr. Mehmet Ferit Erel",
      title: {
        tr: "Yapay Zeka & Akıllı Otomasyon Proje Müdürü / Öğretim Görevlisi",
        en: "AI & Smart Automation Project Manager / Faculty Lecturer"
      },
      institution: {
        tr: "Kastamonu Entegre & Altınbaş Üniversitesi",
        en: "Kastamonu Entegre & Altinbas University"
      },
      topic: {
        tr: "Diş Hekimliğinde Yapay Zeka, Makine Öğrenimi ve Akıllı Dijital Entegrasyon",
        en: "AI, Machine Learning and Smart Digital Integration in Dentistry"
      },
      bio: {
        tr: "Kastamonu Entegre’de Yapay Zeka ve Akıllı Otomasyon Uygulamaları Proje ve Çözüm Müdürü olarak görev yapan Dr. Mehmet Ferit Erel, New York Institute of Technology Elektrik ve Bilgisayar Mühendisliği bölümünden mezun olmuş; yüksek lisansını Galatasaray Üniversitesi Mühendislik Yönetimi’nde, doktorasını ise Elektrik ve Bilgisayar Mühendisliği alanında tamamlamıştır. Turkish Technology, Movus ve Dinçer Logistics gibi şirketlerde kıdemli proje yöneticiliği yapmış olan Dr. Erel, aynı zamanda Altınbaş Üniversitesi bünyesinde yapay zeka, makine öğrenimi ve derin öğrenme üzerine dersler vermektedir.",
        en: "Serving as AI and Smart Automation Project and Solutions Manager at Kastamonu Entegre, Dr. Mehmet Ferit Erel graduated from New York Institute of Technology in Electrical & Computer Engineering. He earned his Master's in Engineering Management at Galatasaray University and PhD in Electrical & Computer Engineering. Having held senior project roles at Turkish Technology, Movus, and Dincer Logistics, Dr. Erel lectures on AI, machine learning, and deep learning at Altinbas University."
      },
      image: "assets/speakers/mehmet_ferit_erel.jpg",
      badge: "Yapay Zeka & İnovasyon",
      category: "keynote",
      time: "14:30 - 15:15",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "mehmet.erel@altinbas.edu.tr"
      }
    },
    {
      id: "sevdenur-gunenc",
      name: "Dr. Dt. Sevdenur Günenç",
      title: {
        tr: "Periodontoloji Uzmanı & Swiss Dental Academy Trainer",
        en: "Periodontology Specialist & Swiss Dental Academy Trainer"
      },
      institution: {
        tr: "Swiss Dental Academy & Özel Lidya Ağız ve Diş Sağlığı Polikliniği",
        en: "Swiss Dental Academy & Ozel Lidya Dental Clinic"
      },
      topic: {
        tr: "Guided Biofilm Therapy'de Minimal İnvaziv Biyofilm Yönetimi",
        en: "Minimally Invasive Biofilm Management in Guided Biofilm Therapy"
      },
      bio: {
        tr: "Biruni Üniversitesi Diş Hekimliği Fakültesi’nden mezun olduktan sonra Altınbaş Üniversitesi’nde Periodontoloji alanında yüksek lisans ve doktora eğitimini tamamlamıştır. Akademik çalışmalarını periodontal tanı, rejeneratif ve cerrahi tedaviler, lazer destekli periodontal uygulamalar, yara iyileşmesi ve hasta odaklı tedavi sonuçları üzerine yoğunlaştırmıştır. Ulusal ve uluslararası bilimsel kongrelerde çalışmalarını sunmuş ve çeşitli araştırmalarda görev almıştır. Swiss Dental Academy bünyesinde Trainer olarak eğitim faaliyetlerini sürdüren Günenç, aynı zamanda Özel Lidya Ağız ve Diş Sağlığı Polikliniği’nin kurucusudur ve klinik çalışmalarına Periodontoloji alanında devam etmektedir.",
        en: "Graduated from Biruni University Faculty of Dentistry and completed her master's and doctorate in Periodontology at Altinbas University. Her research focuses on periodontal diagnostics, regenerative and surgical therapies, laser-assisted periodontal protocols, wound healing, and patient-centered outcomes. Serving as a certified Trainer at Swiss Dental Academy, Dr. Gunenc is also the founder of Ozel Lidya Dental Clinic where she practices."
      },
      image: "assets/speakers/sevdenur_gunenc.jpg",
      badge: "GBT & Hands-on Eğitmeni",
      category: "workshop",
      time: "14:20 - 17:30 (Teorik + Hands-on)",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "sevdenur.gunenc@altinbas.edu.tr"
      }
    },
    {
      id: "ahmet-fehmi-sirin",
      name: "Dr. Öğr. Üyesi Ahmet Fehmi Şirin",
      title: {
        tr: "Restoratif Diş Tedavisi Uzmanı & Dr. Öğr. Üyesi",
        en: "Restorative Dentistry Specialist & Assistant Professor"
      },
      institution: {
        tr: "Altınbaş Üniversitesi Diş Hekimliği Fakültesi Klinik Bilimler Bölümü",
        en: "Altinbas University Faculty of Dentistry, Clinical Sciences Dept."
      },
      topic: {
        tr: "Anterior Bölgede Kırık Dişlerin Estetik Kapatımı",
        en: "Aesthetic Restoration of Fractured Anterior Teeth"
      },
      bio: {
        tr: "Bezmialem Vakıf Üniversitesi Diş Hekimliği Fakültesi’nden mezun olmuş ve Kocaeli Üniversitesi Restoratif Diş Tedavisi Anabilim Dalı’nda uzmanlık eğitimini tamamlamıştır. Akademik kariyerine Kocaeli Üniversitesi’nde Araştırma Görevlisi olarak başlayan Şirin, halen Altınbaş Üniversitesi Klinik Bilimler Bölümü’nde Dr. Öğr. Üyesi olarak görev yapmaktadır. Restoratif diş tedavisi alanındaki akademik ve klinik çalışmalarını sürdürmektedir.",
        en: "Graduated from Bezmialem Vakif University Faculty of Dentistry and completed his specialization at Kocaeli University Department of Restorative Dentistry. Starting his academic career as a Research Assistant at Kocaeli University, Dr. Sirin currently serves as Assistant Professor in the Department of Clinical Sciences at Altinbas University Faculty of Dentistry."
      },
      image: "assets/speakers/ahmet_fehmi_sirin.jpg",
      badge: "Anterior Estetik & Dr. Öğr. Üyesi",
      category: "workshop",
      time: "14:20 - 17:30 (Teorik + Hands-on)",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "ahmet.sirin@altinbas.edu.tr"
      }
    }
  ],

  // 2 Özel Hands-on Eğitim
  workshops: [
    {
      id: "workshop-anterior",
      title: {
        tr: "Anterior Bölgede Kırık Dişlerin Estetik Kapatımı",
        en: "Aesthetic Restoration of Fractured Anterior Teeth"
      },
      instructor: "Dr. Öğr. Üyesi Ahmet Fehmi Şirin",
      instructorTitle: {
        tr: "Restoratif Diş Tedavisi Uzmanı & Dr. Öğr. Üyesi",
        en: "Restorative Dentistry Specialist & Assistant Professor"
      },
      quota: "20 Kişi",
      date: "5 Aralık 2026",
      venue: {
        tr: "Altınbaş Diş Hastanesi",
        en: "Altinbas Dental Hospital"
      },
      theoreticalTime: "14.20 - 15.00 (Teorik Oturum)",
      handsOnTime: "16.00 - 17.30 (Hands-on Klinik Uygulama)",
      curriculum: [
        { tr: "Anterior kompozit restorasyonlarda doğali taklit", en: "Mimicking nature in anterior composite restorations" },
        { tr: "Renk seçimi incelikleri ve optik illüzyonlar", en: "Shade selection subtleties & optical illusions" },
        { tr: "Kırık hattını gizleme ve geçiş teknikleri", en: "Techniques for fracture line masking" },
        { tr: "Tabakalama protokolleri (Dentin / Mine)", en: "Layering protocols (Dentin / Enamel)" },
        { tr: "Uzun dönem başarıda polisaj ve cilanın yeri", en: "Finishing & polishing for long-term clinical success" }
      ],
      image: "assets/handson_ahmet_sirin.jpg",
      programImage: "assets/handson_ahmet_sirin_program.jpg",
      badge: "Hands-on Eğitim"
    },
    {
      id: "workshop-gbt",
      title: {
        tr: "Guided Biofilm Therapy'de Minimal İnvaziv Biyofilm Yönetimi",
        en: "Minimally Invasive Biofilm Management in Guided Biofilm Therapy"
      },
      instructor: "Dr. Dt. Sevdenur Günenç",
      instructorTitle: {
        tr: "Periodontoloji Uzmanı & Swiss Dental Academy Trainer",
        en: "Periodontology Specialist & Swiss Dental Academy Trainer"
      },
      partner: "Guided Biofilm Therapy (GBT)",
      quota: "20 Kişi",
      date: "5 Aralık 2026",
      venue: {
        tr: "Altınbaş Diş Hastanesi",
        en: "Altinbas Dental Hospital"
      },
      theoreticalTime: "14.20 - 15.00 (Teorik Oturum)",
      handsOnTime: "16.00 - 17.30 (Klinik Uygulama)",
      curriculum: [
        { tr: "Guided Biofilm Therapy (GBT) bilimsel konsepti", en: "Guided Biofilm Therapy (GBT) scientific concept" },
        { tr: "Biyofilm ve oral mikrobiyota dengesi", en: "Biofilm and oral microbiota equilibrium" },
        { tr: "Minimal invaziv klinik protokol ve hasta konforu", en: "Minimally invasive clinical protocol & patient comfort" },
        { tr: "Hasta üzerinde klinik uygulama demonstrasyonu", en: "Hands-on application demonstration on patient/model" },
        { tr: "AIRFLOW®, PERIOFLOW® ve PIEZON® protokolü", en: "AIRFLOW®, PERIOFLOW® and PIEZON® protocols" },
        { tr: "Klinik ipuçları & komplikasyonlardan kaçınma", en: "Clinical tips & avoiding complications" }
      ],
      image: "assets/handson_sevdenur_gunenc.jpg",
      programImage: "assets/handson_sevdenur_gunenc_program.jpg",
      badge: "Hands-on Eğitim"
    }
  ],

  // Sektörel Destekçiler ve Sponsorlar (Resmi PDF Verisi & Orijinal Marka Logoları)
  sponsors: [
    {
      name: "Brilliant",
      subtitle: "Coltène",
      category: {
        tr: "Kompozit & Restoratif Sistemler",
        en: "Composite & Restorative Systems"
      },
      logo: "assets/sponsors/coltene.svg",
      website: "https://coltene.dental"
    },
    {
      name: "Saremco",
      subtitle: "Dental AG",
      category: {
        tr: "Dental Biyouyumlu Sistemler",
        en: "Biocompatible Dental Systems"
      },
      logo: "assets/sponsors/saremco.svg",
      website: "https://saremco.ch"
    },
    {
      name: "iTero – Align",
      subtitle: "Align Technology",
      category: {
        tr: "İntraoral Tarama & Şeffaf Plak",
        en: "Intraoral Scanning & Clear Aligners"
      },
      logo: "assets/sponsors/itero.png",
      website: "https://itero.com"
    },
    {
      name: "Topçu Dental",
      subtitle: "Dental Dağıtım",
      category: {
        tr: "Dental Ekipman & Cihazlar",
        en: "Dental Equipment & Technology"
      },
      logo: "assets/sponsors/topcu_dental.png",
      website: "https://topcudental.com"
    },
    {
      name: "EMS",
      subtitle: "Electro Medical Systems",
      category: {
        tr: "Guided Biofilm Therapy & Profilaksi",
        en: "Guided Biofilm Therapy & Prophylaxis"
      },
      logo: "assets/sponsors/ems.png",
      website: "https://ems-dental.com"
    }
  ],

  // Resmi Afişler Galerisi
  posters: [
    {
      id: "main",
      title: {
        tr: "DENTISTRY 5.0 Ana Sempozyum Afişi",
        en: "DENTISTRY 5.0 Main Symposium Poster"
      },
      subtitle: {
        tr: "5 Aralık 2026 | Bakırköy Yerleşkesi | Tüm Konuşmacılar",
        en: "Dec 5, 2026 | Bakirkoy Campus | All Keynotes"
      },
      src: "assets/poster_main.jpg"
    },
    {
      id: "sirin-main",
      title: {
        tr: "Hands-on Afişi: Dr. Öğr. Üyesi Ahmet Fehmi Şirin",
        en: "Hands-on Poster: Asst. Prof. Ahmet Fehmi Sirin"
      },
      subtitle: {
        tr: "Anterior Bölgede Kırık Dişlerin Estetik Kapatımı (20 Kişi)",
        en: "Aesthetic Restoration of Fractured Anterior Teeth (20 Seats)"
      },
      src: "assets/handson_ahmet_sirin.jpg"
    },
    {
      id: "sirin-prog",
      title: {
        tr: "Anterior Restorasyon Program Detayı",
        en: "Anterior Restoration Detailed Program"
      },
      subtitle: {
        tr: "14.20 - 15.00 Teorik | 16.00 - 17.30 Hands-on",
        en: "14.20 - 15.00 Theory | 16.00 - 17.30 Hands-on"
      },
      src: "assets/handson_ahmet_sirin_program.jpg"
    },
    {
      id: "gunenc-main",
      title: {
        tr: "Hands-on Afişi: Dr. Dt. Sevdenur Günenç (GBT)",
        en: "Hands-on Poster: Sevdenur Gunenc (GBT)"
      },
      subtitle: {
        tr: "Guided Biofilm Therapy'de Minimal İnvaziv Biyofilm Yönetimi",
        en: "Minimally Invasive Biofilm Management in GBT (20 Seats)"
      },
      src: "assets/handson_sevdenur_gunenc.jpg"
    },
    {
      id: "gunenc-prog",
      title: {
        tr: "Guided Biofilm Therapy Program Detayı",
        en: "Guided Biofilm Therapy Detailed Program"
      },
      subtitle: {
        tr: "14.20 - 15.00 Teorik | 16.00 - 17.30 Hands-on",
        en: "14.20 - 15.00 Theory | 16.00 - 17.30 Hands-on"
      },
      src: "assets/handson_sevdenur_gunenc_program.jpg"
    }
  ],

  // Bilimsel Program Akışı
  schedule: {
    day1: [
      {
        time: "09:00 - 09:45",
        type: "registration",
        title: {
          tr: "Kayıt, Yaka Kartı Dağıtımı & Karşılama Kahvesi",
          en: "Registration, Badge Pick-up & Welcome Coffee"
        },
        speaker: { tr: "AUDSA Karşılama Ekibi", en: "AUDSA Welcome Committee" },
        hall: { tr: "Ana Fuaye Alanı", en: "Main Foyer Area" },
        badge: { tr: "Kayıt", en: "Registration" },
        icon: "coffee"
      },
      {
        time: "09:45 - 10:00",
        type: "opening",
        title: {
          tr: "Açılış Konuşmaları & Sempozyum Takdimi",
          en: "Opening Speeches & Symposium Introduction"
        },
        speaker: {
          tr: "Dekanlık & AUDSA Kulüp Başkanları (İlknur Bozdağ, Hatice Pamukcuoglu)",
          en: "Dean's Office & AUDSA Club Presidents (Ilknur Bozdag, Hatice Pamukcuoglu)"
        },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Açılış", en: "Opening" },
        icon: "mic"
      },
      {
        time: "10:00 - 10:45",
        type: "keynote",
        title: {
          tr: "Dijitalden Bireysele: Protetik Restorasyonlarda Biyomimetik ve Estetik Yaklaşımlar",
          en: "From Digital to Individual: Biomimetic and Aesthetic Approaches in Prosthetic Restorations"
        },
        speaker: { tr: "Prof. Dr. Selim Pamuk", en: "Prof. Dr. Selim Pamuk" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Konuşma 1", en: "Keynote 1" },
        icon: "sparkles"
      },
      {
        time: "10:45 - 11:00",
        type: "break",
        title: {
          tr: "Kahve Molası & Sponsor Stant Alanı Ziyareti",
          en: "Coffee Break & Sponsor Exhibition Visit"
        },
        speaker: { tr: "İkram & Network", en: "Refreshments & Networking" },
        hall: { tr: "Zemin Kat Fuaye & Sponsor Stantları", en: "Ground Floor Foyer & Booths" },
        badge: { tr: "Mola", en: "Break" },
        icon: "coffee"
      },
      {
        time: "11:00 - 11:45",
        type: "keynote",
        title: {
          tr: "Modern Ortodontide Şeffaf Plak Biyomekaniği ve 3D Tedavi Planlama",
          en: "Clear Aligner Biomechanics and 3D Treatment Planning in Modern Orthodontics"
        },
        speaker: { tr: "Prof. Dr. Korkmaz Sayınsu", en: "Prof. Dr. Korkmaz Sayınsu" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Konuşma 2", en: "Keynote 2" },
        icon: "smile"
      },
      {
        time: "11:45 - 12:00",
        type: "break",
        title: {
          tr: "Kahve & Çay Molası",
          en: "Coffee & Tea Break"
        },
        speaker: { tr: "İkram & Bilimsel Sohbet", en: "Networking" },
        hall: { tr: "Zemin Kat Fuaye Alanı", en: "Ground Floor Foyer" },
        badge: { tr: "Mola", en: "Break" },
        icon: "coffee"
      },
      {
        time: "12:00 - 12:45",
        type: "keynote",
        title: {
          tr: "Çene Cerrahisinde İleri Ogmentasyon ve Biyolojik İmplant Protokolleri",
          en: "Advanced Augmentation & Biological Implant Protocols in Maxillofacial Surgery"
        },
        speaker: { tr: "Prof. Dr. Nuray Yılmaz Altıntaş", en: "Prof. Dr. Nuray Yilmaz Altintas" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Konuşma 3", en: "Keynote 3" },
        icon: "activity"
      },
      {
        time: "12:45 - 13:30",
        type: "lunch",
        title: {
          tr: "Öğle Yemeği Arası & Sponsor Stantları İnteraktif Alanı",
          en: "Lunch Break & Interactive Sponsor Area"
        },
        speaker: { tr: "Tüm Katılımcılar İçin Yemek İkramı", en: "Catered Lunch for Attendees" },
        hall: { tr: "Kampüs Sosyal Tesisler & Fuaye", en: "Campus Social Center & Foyer" },
        badge: { tr: "Öğle Yemeği", en: "Lunch" },
        icon: "utensils"
      },
      {
        time: "13:30 - 14:15",
        type: "keynote",
        title: {
          tr: "Kişiselleştirilmiş Protetik Planlama ve Biyomalzeme Dinamikleri",
          en: "Personalized Prosthetic Planning and Biomaterial Dynamics"
        },
        speaker: { tr: "Prof. Dr. Subutay Han Altıntaş", en: "Prof. Dr. Subutay Han Altintas" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Konuşma 4", en: "Keynote 4" },
        icon: "layers"
      },
      {
        time: "14:15 - 14:30",
        type: "break",
        title: {
          tr: "Kahve Molası & Hands-on Salonlarına Geçiş",
          en: "Coffee Break & Transition to Workshop Rooms"
        },
        speaker: { tr: "Kısa Ara", en: "Short Break" },
        hall: { tr: "Fuaye Alanı", en: "Foyer Area" },
        badge: { tr: "Mola", en: "Break" },
        icon: "coffee"
      },
      {
        time: "14:30 - 15:15",
        type: "keynote",
        title: {
          tr: "Diş Hekimliğinde Yapay Zeka, Makine Öğrenimi ve Akıllı Dijital Entegrasyon",
          en: "AI, Machine Learning and Smart Digital Integration in Dentistry"
        },
        speaker: { tr: "Dr. Mehmet Ferit Erel", en: "Dr. Mehmet Ferit Erel" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Konuşma 5", en: "Keynote 5" },
        icon: "cpu"
      },
      {
        time: "15:15 - 16:00",
        type: "closing",
        title: {
          tr: "Sempozyum Kapanışı, Teşekkür Plaketi Takdimi & Toplu Fotoğraf Çekimi",
          en: "Closing Ceremony, Awards & Group Photo"
        },
        speaker: { tr: "AUDSA Yönetim Kurulu & Değerli Konuşmacılarımız", en: "AUDSA Board & Keynote Faculty" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Kapanış", en: "Closing" },
        icon: "award"
      }
    ],

    day2: [
      {
        time: "14:20 - 15:00",
        type: "workshop",
        title: {
          tr: "Teorik Oturum: Anterior Bölgede Kırık Dişlerin Estetik Kapatımı",
          en: "Theoretical Session: Aesthetic Restoration of Fractured Anterior Teeth"
        },
        speaker: { tr: "Dr. Öğr. Üyesi Ahmet Fehmi Şirin", en: "Dr. Öğr. Üyesi Ahmet Fehmi Sirin" },
        hall: { tr: "Altınbaş Diş Hastanesi - Seminer Salonu", en: "Altinbas Dental Hospital - Seminar Room" },
        badge: { tr: "Teorik Oturum", en: "Theoretical" },
        icon: "book-open"
      },
      {
        time: "14:20 - 15:00",
        type: "workshop",
        title: {
          tr: "Teorik Oturum: Guided Biofilm Therapy'de Minimal İnvaziv Biyofilm Yönetimi",
          en: "Theoretical Session: Minimally Invasive Biofilm Management in GBT"
        },
        speaker: { tr: "Dr. Dt. Sevdenur Günenç", en: "Dr. Dt. Sevdenur Gunenc" },
        hall: { tr: "Altınbaş Diş Hastanesi - GBT Amfisi", en: "Altinbas Dental Hospital - GBT Hall" },
        badge: { tr: "Teorik Oturum", en: "Theoretical" },
        icon: "shield-check"
      },
      {
        time: "15:00 - 16:00",
        type: "break",
        title: {
          tr: "Klinik Hazırlık, Kahve Molası & Katılımcı Karşılama",
          en: "Clinical Preparation & Coffee Break"
        },
        speaker: { tr: "Atölye Asistanları & Eğitmenler", en: "Workshop Assistants & Instructors" },
        hall: { tr: "Diş Hastanesi Fuaye", en: "Dental Hospital Foyer" },
        badge: { tr: "Mola / Hazırlık", en: "Break" },
        icon: "coffee"
      },
      {
        time: "16:00 - 17:30",
        type: "workshop",
        title: {
          tr: "Klinik Uygulama (Hands-on): Anterior Bölgede Kırık Dişlerin Estetik Kapatımı",
          en: "Clinical Practice (Hands-on): Aesthetic Restoration of Fractured Anterior Teeth"
        },
        speaker: { tr: "Dr. Öğr. Üyesi Ahmet Fehmi Şirin (Kontenjan: 20 Kişi)", en: "Dr. Öğr. Üyesi Ahmet Fehmi Sirin (Max 20 Seats)" },
        hall: { tr: "Altınbaş Diş Hastanesi - Fantom & Klinik Ünitesi", en: "Altinbas Dental Hospital - Phantom & Clinic Suite" },
        badge: { tr: "Hands-on (20 Kişi)", en: "Hands-on (20 Seats)" },
        icon: "sparkles"
      },
      {
        time: "16:00 - 17:30",
        type: "workshop",
        title: {
          tr: "Klinik Uygulama (Hands-on): GBT ile Minimal İnvaziv Biyofilm Protokolü (AIRFLOW® & PIEZON®)",
          en: "Clinical Practice (Hands-on): GBT Minimally Invasive Biofilm Protocol"
        },
        speaker: { tr: "Dr. Dt. Sevdenur Günenç (Kontenjan: 20 Kişi)", en: "Dr. Dt. Sevdenur Gunenc (Max 20 Seats)" },
        hall: { tr: "Altınbaş Diş Hastanesi - Periodontoloji Kliniği", en: "Altinbas Dental Hospital - Periodontology Clinic" },
        badge: { tr: "Hands-on (20 Kişi)", en: "Hands-on (20 Seats)" },
        icon: "activity"
      }
    ]
  },

  faqs: [
    {
      q: {
        tr: "Sempozyum ne zaman ve nerede düzenleniyor?",
        en: "When and where is the symposium taking place?"
      },
      a: {
        tr: "Sempozyumumuz 5 Aralık 2026 tarihinde Altınbaş Üniversitesi Bakırköy Yerleşkesi (Büyük Oditoryum) ve Altınbaş Diş Hastanesi bünyesinde gerçekleştirilecektir.",
        en: "The symposium takes place on December 5, 2026 at Altinbas University Bakirkoy Campus (Grand Auditorium) and Altinbas Dental Hospital."
      }
    },
    {
      q: {
        tr: "Sempozyuma nasıl kayıt olabilirim?",
        en: "How can I register for the symposium?"
      },
      a: {
        tr: "Sempozyum ve Hands-on kayıtları resmi başvuru formumuz üzerinden alınmaktadır. Sitemizdeki 'Kayıt Ol' veya 'Kayıt Formu' butonlarına tıklayarak veya https://forms.gle/BFu1sdK98rwNL6zg8 adresinden formunuzu iletebilirsiniz.",
        en: "Registrations are collected via our official application form. Click on the 'Register' or 'Registration Form' buttons or visit https://forms.gle/BFu1sdK98rwNL6zg8."
      }
    },
    {
      q: {
        tr: "Hands-on Workshop kontenjanları kaç kişiliktir?",
        en: "What is the capacity for Hands-on Workshops?"
      },
      a: {
        tr: "Birebir klinik uygulama kalitesini en üst düzeyde tutmak amacıyla hem Dr. Öğr. Üyesi Ahmet Fehmi Şirin hem de Dr. Dt. Sevdenur Günenç'in Hands-on atölyeleri 20'şer kişilik kesin kontenjanla sınırlandırılmıştır.",
        en: "To guarantee premium hands-on learning, both workshops (Ahmet Fehmi Sirin & Sevdenur Gunenc) are strictly capped at 20 participants each."
      }
    },
    {
      q: {
        tr: "Sempozyuma kimler katılabilir?",
        en: "Who can attend the symposium?"
      },
      a: {
        tr: "Sempozyumumuz Altınbaş Üniversitesi Diş Hekimliği Fakültesi öğrencileri başta olmak üzere tüm üniversitelerin diş hekimliği öğrencilerine, stajyer hekimlere, asistanlara, akademisyenlere ve serbest çalışan diş hekimlerine açıktır.",
        en: "The symposium is open to dental students, intern dentists, residents, academicians, and dental practitioners from Altinbas University and all dental faculties nationwide."
      }
    },
    {
      q: {
        tr: "Katılım sertifikası verilecek mi?",
        en: "Will attendance certificates be provided?"
      },
      a: {
        tr: "Evet. Tüm katılımcılara Altınbaş Üniversitesi Diş Hekimliği Fakültesi ve AUDSA onaylı, doğrulanabilir Katılım Sertifikası verilecektir.",
        en: "Yes. All attendees will receive an official verifiable Certificate of Attendance approved by Altinbas University Faculty of Dentistry and AUDSA."
      }
    },
    {
      q: {
        tr: "Etkinlik yerine ulaşım nasıl sağlanır?",
        en: "How can I reach the venue?"
      },
      a: {
        tr: "Etkinliğimiz Altınbaş Üniversitesi Bakırköy Yerleşkesi'nde gerçekleştirilecektir. M1A/M3 Metrosu İncirli İstasyonu ve Metrobüs İncirli durağına sadece 4-5 dakika yürüme mesafesindedir. Ayrıca Marmaray Bakırköy istasyonundan minibüs veya otobüsle 8 dakikada ulaşılabilir.",
        en: "The event is held at Altinbas University Bakirkoy Campus. It is a 4-5 minute walk from M1A/M3 Metro Incirli station and Metrobus Incirli stop."
      }
    },
    {
      q: {
        tr: "Sponsorluk veya fuaye stant alanı için kiminle iletişime geçmeliyiz?",
        en: "Who should we contact for sponsorship or exhibition booth space?"
      },
      a: {
        tr: "Sponsorluk ve stant talepleriniz için AUDSA Kulüp Başkanları İlknur Bozdağ (0532 175 01 60) ve Hatice Pamukcuoğlu (0546 736 29 37) veya audsaorg@gmail.com adresi üzerinden doğrudan irtibat kurabilirsiniz.",
        en: "For sponsorship inquiries, contact AUDSA Club Presidents Ilknur Bozdag (+90 532 175 01 60) and Hatice Pamukcuoglu (+90 546 736 29 37) or email audsaorg@gmail.com."
      }
    }
  ],

  organizers: [
    {
      name: "İlknur Bozdağ",
      role: { tr: "AUDSA Kulüp Başkanı", en: "AUDSA Club President" },
      phone: "0532 175 01 60",
      email: "ilknurbozdag16@gmail.com"
    },
    {
      name: "Hatice Pamukcuoglu",
      role: { tr: "AUDSA Kulüp Başkanı", en: "AUDSA Club President" },
      phone: "0546 736 29 37",
      email: "haticepamukcuogluu1@gmail.com"
    },
    {
      name: "Sarkis Kartun",
      role: { tr: "AUDSA Kulüp Başkan Yardımcısı", en: "AUDSA Vice President" },
      phone: "0535 554 46 89",
      email: "sarkis.kartun@audsa.org"
    }
  ],

  social: {
    instagramClub: "https://instagram.com/audsorg",
    instagramFaculty: "https://instagram.com/altinbas.facultyofdentistry",
    websiteFaculty: "https://altinbas.edu.tr/fakulteler/dis-hekimligi-fakultesi",
    websiteUniversity: "https://altinbas.edu.tr",
    emailClub: "audsaorg@gmail.com"
  }
};
