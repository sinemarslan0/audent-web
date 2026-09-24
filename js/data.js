/**
 * Altınbaş University Faculty of Dentistry - AUDSA
 * DENTISTRY 5.0: DİJİTALDEN BİREYSELE SEMPOZYUMU
 * Core Data File (Speakers, Schedule, FAQ, Organizers)
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
      tr: "24 - 25 Ekim 2026",
      en: "October 24 - 25, 2026"
    },
    targetCountdownDate: "2026-10-24T09:30:00+03:00",
    registrationFormUrl: "https://forms.gle/AUDSA-Dentistry5-Kayit",
    venue: {
      name: {
        tr: "Altınbaş Üniversitesi Bakırköy Sağlık Yerleşkesi",
        en: "Altinbas University Bakirkoy Health Campus"
      },
      hall: {
        tr: "Büyük Oditoryum & Zemin Kat Fuaye Alanı",
        en: "Grand Auditorium & Ground Floor Foyer"
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
      number: "15+",
      icon: "mic",
      title: { tr: "Uzman Konuşmacı", en: "Keynote Speakers" },
      desc: { tr: "Alanında öncü akademisyenler ve klinik uzmanlar", en: "Leading academicians and clinical experts" }
    },
    {
      id: "workshops",
      number: "8+",
      icon: "activity",
      title: { tr: "Hands-on Workshop", en: "Hands-on Workshops" },
      desc: { tr: "Birebir uygulamalı pratik beceri eğitimleri", en: "One-on-one practical hands-on skill training" }
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
      desc: { tr: "Resmi onaylı katılım belgesi ve SDE puanı", en: "Officially certified attendance & CPD credits" }
    }
  ],

  speakers: [
    {
      id: "ahmet-mutluer",
      name: "Ahmet Serdar Mutluer",
      title: {
        tr: "Dijital Diş Hekimliği & CAD/CAM Uzmanı",
        en: "Digital Dentistry & CAD/CAM Specialist"
      },
      institution: {
        tr: "Dijital Dental Çözümler & İnovasyon Merkezi",
        en: "Digital Dental Solutions & Innovation Center"
      },
      topic: {
        tr: "Dijital Diş Hekimliğinde CAD/CAM İş Akışı ve Yapay Zeka Entegrasyonu",
        en: "CAD/CAM Workflow and Artificial Intelligence Integration in Digital Dentistry"
      },
      bio: {
        tr: "Ahmet Serdar Mutluer, dijital diş hekimliği, 3D ağız içi tarama, laboratuvar CAD/CAM entegrasyonu ve yapay zeka destekli protetik tasarım süreçlerinde Türkiye'nin önde gelen isimlerindendir. Çok sayıda ulusal ve uluslararası sempozyumda canlı dijital iş akışı demonstrasyonları gerçekleştirmiştir.",
        en: "Ahmet Serdar Mutluer is one of Turkey's foremost experts in digital dentistry, 3D intraoral scanning, lab CAD/CAM integration, and AI-driven prosthetic design. He has conducted numerous live digital workflow demonstrations across international symposia."
      },
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      badge: "CAD/CAM & AI",
      time: "10:00 - 10:40",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "contact@audsa.org"
      }
    },
    {
      id: "selim-pamuk",
      name: "Prof. Dr. Selim Pamuk",
      title: {
        tr: "Protetik Diş Tedavisi Uzmanı & Öğretim Üyesi",
        en: "Prosthodontics Specialist & Professor"
      },
      institution: {
        tr: "Diş Hekimliği Fakültesi, Protetik Diş Tedavisi A.D.",
        en: "Faculty of Dentistry, Department of Prosthodontics"
      },
      topic: {
        tr: "Dijitalden Bireysele: Protetik Restorasyonlarda Biyomimetik ve Estetik Yaklaşımlar",
        en: "From Digital to Individual: Biomimetic and Aesthetic Approaches in Prosthetic Restorations"
      },
      bio: {
        tr: "Prof. Dr. Selim Pamuk, protetik diş hekimliği, biyomimetik restoratif prensipler ve oklüzyon alanlarında uluslararası literatüre katkı sağlamış duayen bir akademisyendir. Bireyselleştirilmiş protetik tedavi stratejileri ve gülüş biyolojisi üzerine geniş bir klinik tecrübeye sahiptir.",
        en: "Prof. Dr. Selim Pamuk is a renowned academician who has significantly contributed to prosthodontics literature, biomimetic restorative principles, and occlusion. He holds extensive clinical expertise in patient-customized prosthetic rehabilitation and smile biology."
      },
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
      badge: "Protetik & Estetik",
      time: "11:00 - 11:40",
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
        tr: "Ortodonti Anabilim Dalı",
        en: "Department of Orthodontics"
      },
      topic: {
        tr: "Modern Ortodontide Şeffaf Plak Biyomekaniği ve 3D Tedavi Planlama",
        en: "Clear Aligner Biomechanics and 3D Treatment Planning in Modern Orthodontics"
      },
      bio: {
        tr: "Prof. Dr. Korkmaz Sayınsu, ortodonti disiplininde şeffaf plak sistemleri, kraniofasiyal ortopedi ve dijital tedavi simülasyonları konularında sayısız bilimsel yayın ve uluslararası konferans sunumuna imza atmıştır. Ortodontide öngörülebilir kuvvet sistemleri üzerine araştırmalarını sürdürmektedir.",
        en: "Prof. Dr. Korkmaz Sayınsu is a prominent orthodontic authority specializing in clear aligner mechanics, craniofacial orthopedics, and digital treatment simulations with countless scientific papers and global lecture appearances."
      },
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      badge: "Şeffaf Plak & 3D Planlama",
      time: "12:00 - 12:40",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "korkmaz.sayinsu@altinbas.edu.tr"
      }
    },
    {
      id: "sevgin-sen",
      name: "Dr. Dt. Sevgin Şen",
      title: {
        tr: "Estetik Diş Hekimi & Protetik Uzmanı",
        en: "Aesthetic Dentist & Prosthodontist"
      },
      institution: {
        tr: "Estetik Diş Hekimliği Akademisi Üyesi",
        en: "Member of Aesthetic Dentistry Academy"
      },
      topic: {
        tr: "Minimal İnvaziv Estetik Yaklaşımlar ve Dijital Gülüş Tasarımı (DSD)",
        en: "Minimally Invasive Aesthetic Approaches and Digital Smile Design (DSD)"
      },
      bio: {
        tr: "Dr. Dt. Sevgin Şen, porselen lamina veneerler, mikro-invaziv preparasyon teknikleri ve dijital gülüş tasarımı mimarisi üzerine uzmanlaşmıştır. Diş dokusunun maksimum korunmasını hedefleyen modern adeziv protokollerin öncülerindendir.",
        en: "Dr. Dt. Sevgin Sen specializes in porcelain laminate veneers, micro-invasive preparation techniques, and digital smile design architecture, championing modern adhesive protocols for maximal tooth structure preservation."
      },
      image: "https://images.unsplash.com/photo-1594824813511-1358f2780e22?auto=format&fit=crop&w=600&q=80",
      badge: "Dijital Gülüş Tasarımı",
      time: "13:40 - 14:20",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "sevgin.sen@audsa.org"
      }
    },
    {
      id: "nuray-subutay-altintas",
      name: "Prof. Dr. Nuray Altıntaş & Prof. Dr. Subutay Altıntaş",
      title: {
        tr: "Ağız Diş Çene Cerrahisi & Protetik Cerrahi Ortak Paneli",
        en: "Oral & Maxillofacial Surgery and Prosthetic Joint Panel"
      },
      institution: {
        tr: "Ağız, Diş ve Çene Cerrahisi & Biyomalzemeler A.D.",
        en: "Oral & Maxillofacial Surgery & Biomaterials Dept."
      },
      topic: {
        tr: "Cerrahi ve Protetik Açıdan İmplantolojide Güncel Trendler ve Kemik Rejenerasyonu",
        en: "Current Trends in Surgical and Prosthetic Implantology & Bone Regeneration"
      },
      bio: {
        tr: "Prof. Dr. Nuray Altıntaş ve Prof. Dr. Subutay Altıntaş, cerrahi ve protetik iş birliğinin implant başarısındaki kilit rolünü ele almaktadır. Kemik ogmentasyonları, sinüs tabanı yükseltme ve kişiselleştirilmiş subperiostal implant teknolojilerinde öncü çalışmalara sahiptirler.",
        en: "Prof. Dr. Nuray Altintas and Prof. Dr. Subutay Altintas present a synergistic surgical and prosthetic approach to implantology, featuring advanced guided bone regeneration, sinus floor elevations, and customized subperiosteal implants."
      },
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
      badge: "İleri İmplantoloji & Cerrahi",
      time: "14:40 - 15:20",
      day: 1,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "cerrahi@audsa.org"
      }
    },
    {
      id: "elena-rostova",
      name: "Assoc. Prof. Dr. Maya Lindqvist",
      title: {
        tr: "Biyomalzemeler & Rejeneratif Diş Hekimliği Uzmanı",
        en: "Biomaterials & Regenerative Dentistry Specialist"
      },
      institution: {
        tr: "Nordic Dental Innovation Institute (İsveç / Konuk Konuşmacı)",
        en: "Nordic Dental Innovation Institute (Sweden / Guest Speaker)"
      },
      topic: {
        tr: "Diş Hekimliğinde Biyoaktif Seramikler ve Kök Hücre Uygulamaları",
        en: "Bioactive Ceramics and Stem Cell Applications in Dentistry"
      },
      bio: {
        tr: "Dr. Maya Lindqvist, rejeneratif pulpa tedavileri ve biyoseramik materyallerin hücresel yanıtları üzerine uluslararası projeler yürütmektedir. Sempozyumumuzda konuk uluslararası konuşmacı olarak yer almaktadır.",
        en: "Dr. Maya Lindqvist leads international research on regenerative endodontics and cellular interactions with smart bioceramic matrices as our distinguished international keynote."
      },
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
      badge: "Rejenerasyon & Biyomalzeme",
      time: "Gün 2 / Day 2",
      day: 2,
      socials: {
        linkedin: "https://linkedin.com",
        scholar: "https://scholar.google.com",
        email: "international@audsa.org"
      }
    }
  ],

  schedule: {
    day1: [
      {
        time: "09:15 - 09:50",
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
        time: "09:50 - 10:00",
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
        time: "10:00 - 10:40",
        type: "keynote",
        title: {
          tr: "Dijital Diş Hekimliğinde CAD/CAM İş Akışı ve Yapay Zeka Entegrasyonu",
          en: "CAD/CAM Workflow and Artificial Intelligence Integration in Digital Dentistry"
        },
        speaker: { tr: "Ahmet Serdar Mutluer", en: "Ahmet Serdar Mutluer" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Konuşma 1", en: "Keynote 1" },
        icon: "cpu"
      },
      {
        time: "10:40 - 11:00",
        type: "break",
        title: {
          tr: "Kahve Molası & Stant Alanı Ziyareti",
          en: "Coffee Break & Exhibition Area Visit"
        },
        speaker: { tr: "İkram & Network", en: "Refreshments & Networking" },
        hall: { tr: "Zemin Kat Fuaye & Sponsor Stantları", en: "Ground Floor Foyer & Sponsor Booths" },
        badge: { tr: "Mola", en: "Break" },
        icon: "coffee"
      },
      {
        time: "11:00 - 11:40",
        type: "keynote",
        title: {
          tr: "Dijitalden Bireysele: Protetik Restorasyonlarda Biyomimetik ve Estetik Yaklaşımlar",
          en: "From Digital to Individual: Biomimetic and Aesthetic Approaches in Prosthetic Restorations"
        },
        speaker: { tr: "Prof. Dr. Selim Pamuk", en: "Prof. Dr. Selim Pamuk" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Konuşma 2", en: "Keynote 2" },
        icon: "sparkles"
      },
      {
        time: "11:40 - 12:00",
        type: "break",
        title: {
          tr: "Kahve Molası & E-Poster Sunum Alanı",
          en: "Coffee Break & E-Poster Exhibition"
        },
        speaker: { tr: "İkram & Bilimsel Tartışma", en: "Coffee & Scientific Networking" },
        hall: { tr: "Zemin Kat Fuaye Alanı", en: "Ground Floor Foyer" },
        badge: { tr: "Mola", en: "Break" },
        icon: "coffee"
      },
      {
        time: "12:00 - 12:40",
        type: "keynote",
        title: {
          tr: "Modern Ortodontide Şeffaf Plak Biyomekaniği ve 3D Tedavi Planlama",
          en: "Clear Aligner Biomechanics and 3D Treatment Planning in Modern Orthodontics"
        },
        speaker: { tr: "Prof. Dr. Korkmaz Sayınsu", en: "Prof. Dr. Korkmaz Sayınsu" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Konuşma 3", en: "Keynote 3" },
        icon: "smile"
      },
      {
        time: "12:40 - 13:40",
        type: "lunch",
        title: {
          tr: "Öğle Yemeği Arası & Sponsor Stantları İnteraktif Alanı",
          en: "Lunch Break & Interactive Sponsor Exhibition"
        },
        speaker: { tr: "Tüm Katılımcılar İçin Yemek İkramı", en: "Catered Lunch for All Attendees" },
        hall: { tr: "Kampüs Sosyal Tesisler & Fuaye", en: "Campus Social Center & Foyer" },
        badge: { tr: "Öğle Yemeği", en: "Lunch" },
        icon: "utensils"
      },
      {
        time: "13:40 - 14:20",
        type: "keynote",
        title: {
          tr: "Minimal İnvaziv Estetik Yaklaşımlar ve Dijital Gülüş Tasarımı (DSD)",
          en: "Minimally Invasive Aesthetic Approaches and Digital Smile Design (DSD)"
        },
        speaker: { tr: "Dr. Dt. Sevgin Şen", en: "Dr. Dt. Sevgin Sen" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Konuşma 4", en: "Keynote 4" },
        icon: "gem"
      },
      {
        time: "14:20 - 14:40",
        type: "break",
        title: {
          tr: "Kahve & Çay Molası",
          en: "Coffee & Tea Break"
        },
        speaker: { tr: "Kısa Dinlenme & Soru-Cevap", en: "Networking & Q&A" },
        hall: { tr: "Zemin Kat Fuaye Alanı", en: "Ground Floor Foyer" },
        badge: { tr: "Mola", en: "Break" },
        icon: "coffee"
      },
      {
        time: "14:40 - 15:20",
        type: "keynote",
        title: {
          tr: "Cerrahi ve Protetik Açıdan İmplantolojide Güncel Trendler ve Kemik Rejenerasyonu",
          en: "Current Trends in Surgical and Prosthetic Implantology & Bone Regeneration"
        },
        speaker: { tr: "Prof. Dr. Nuray Altıntaş & Prof. Dr. Subutay Altıntaş", en: "Prof. Dr. Nuray Altintas & Prof. Dr. Subutay Altintas" },
        hall: { tr: "Büyük Oditoryum", en: "Grand Auditorium" },
        badge: { tr: "Ortak Panel", en: "Joint Panel" },
        icon: "activity"
      },
      {
        time: "15:20 - 16:00",
        type: "closing",
        title: {
          tr: "Sempozyum Kapanışı, Plaket Takdimi & Toplu Fotoğraf Çekimi",
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
        time: "09:30 - 12:00",
        type: "workshop",
        title: {
          tr: "Workshop A: İntraoral Tarama ve Dijital Restorasyon Tasarımı (Hands-on CAD/CAM)",
          en: "Workshop A: Intraoral Scanning & Digital Restoration Design (Hands-on CAD/CAM)"
        },
        speaker: { tr: "Ahmet Serdar Mutluer & Klinik Eğitmenler", en: "Ahmet Serdar Mutluer & Clinical Instructors" },
        hall: { tr: "Dijital Simülasyon Laboratuvarı - Kat 2", en: "Digital Simulation Lab - 2nd Floor" },
        badge: { tr: "Atölye (Hands-on)", en: "Hands-on Workshop" },
        icon: "laptop"
      },
      {
        time: "10:00 - 12:30",
        type: "workshop",
        title: {
          tr: "Workshop B: Anterior Direkt Kompozit Tabakalama ve Polisaj Protokolleri",
          en: "Workshop B: Anterior Direct Composite Stratification & Polishing Protocols"
        },
        speaker: { tr: "Dr. Dt. Sevgin Şen", en: "Dr. Dt. Sevgin Sen" },
        hall: { tr: "Fantom Laboratuvarı 1", en: "Phantom Lab 1" },
        badge: { tr: "Atölye (Hands-on)", en: "Hands-on Workshop" },
        icon: "layers"
      },
      {
        time: "12:30 - 13:30",
        type: "lunch",
        title: {
          tr: "Workshop Katılımcıları Öğle Yemeği & Değerlendirme",
          en: "Workshop Attendees Lunch & Discussion"
        },
        speaker: { tr: "Tüm Workshop Grupları", en: "All Workshop Groups" },
        hall: { tr: "Fakülte Lounge & Bahçe", en: "Faculty Lounge & Garden" },
        badge: { tr: "Yemek", en: "Lunch" },
        icon: "utensils"
      },
      {
        time: "13:30 - 16:00",
        type: "workshop",
        title: {
          tr: "Workshop C: Şeffaf Plak Ataşman Yerleşimi, İPR ve Tedavi İzleme Simülasyonu",
          en: "Workshop C: Clear Aligner Attachment Placement, IPR & Monitoring Simulation"
        },
        speaker: { tr: "Prof. Dr. Korkmaz Sayınsu", en: "Prof. Dr. Korkmaz Sayınsu" },
        hall: { tr: "Ortodonti Seminer Salonu", en: "Orthodontics Seminar Hall" },
        badge: { tr: "Atölye (Hands-on)", en: "Hands-on Workshop" },
        icon: "smile"
      },
      {
        time: "13:30 - 16:30",
        type: "workshop",
        title: {
          tr: "Workshop D: Cerrahi Rehberli İmplant Cerrahisi & İleri Dikiş/Flep Teknikleri",
          en: "Workshop D: Guided Implant Surgery & Advanced Flap / Suture Techniques"
        },
        speaker: { tr: "Cerrahi & İmplantoloji Eğitim Ekibi", en: "Surgical & Implantology Faculty Team" },
        hall: { tr: "Cerrahi Uygulama Ünitesi", en: "Surgical Practice Suite" },
        badge: { tr: "Atölye (Hands-on)", en: "Hands-on Workshop" },
        icon: "shield-check"
      }
    ]
  },

  faqs: [
    {
      q: {
        tr: "Sempozyuma nasıl kayıt olabilirim?",
        en: "How can I register for the symposium?"
      },
      a: {
        tr: "Sempozyum kayıtları resmi Google Başvuru Formumuz üzerinden alınmaktadır. Sitemizde yer alan 'Kayıt Ol (Google Form)' butonlarına tıklayarak formu doldurabilir, kontenjan durumuna göre onay e-postanızı alabilirsiniz.",
        en: "Registrations are collected via our official Google Application Form. Click on the 'Register (Google Form)' buttons on the site to fill out the form and secure your seat."
      }
    },
    {
      q: {
        tr: "Sempozyuma kimler katılabilir?",
        en: "Who can attend the symposium?"
      },
      a: {
        tr: "Sempozyumumuz Altınbaş Üniversitesi Diş Hekimliği Fakültesi öğrencileri başta olmak üzere tüm üniversitelerin diş hekimliği öğrencilerine, stajyer hekimlere, asistanlara, akademisyenlere ve serbest çalışan diş hekimlerine açıktır.",
        en: "The symposium is open to dental students, intern dentists, residents, academicians, and dental practitioners from Altinbas University and all dental faculties nationwide and internationally."
      }
    },
    {
      q: {
        tr: "Katılım sertifikası verilecek mi ve sertifikalar akredite midir?",
        en: "Will attendance certificates be provided and are they accredited?"
      },
      a: {
        tr: "Evet. Tüm katılımcılara Altınbaş Üniversitesi Diş Hekimliği Fakültesi ve AUDSA onaylı, doğrulanabilir Katılım Sertifikası verilecektir. Diş hekimleri için Sürekli Diş Hekimliği Eğitimi (SDE) puanı geçerliliği bulunmaktadır.",
        en: "Yes. All attendees will receive an official, verifiable Certificate of Attendance approved by Altinbas University Faculty of Dentistry and AUDSA. CPD credits apply for dental practitioners."
      }
    },
    {
      q: {
        tr: "Hands-on Workshop oturumlarına katılım nasıl planlanıyor?",
        en: "How is participation in Hands-on Workshops organized?"
      },
      a: {
        tr: "Hands-on atölyeler birebir uygulama imkânı sunabilmek adına sınırlı kontenjanla (maksimum 20-25 kişi) düzenlenmektedir. Kayıt Google Formu içerisinde ilgilendiğiniz atölye tercihini belirterek ön kayıt oluşturabilirsiniz.",
        en: "Hands-on workshops have strictly limited capacity (max 20-25 seats each) for personalized practice. You can specify your preferred workshop directly within the Google Registration Form."
      }
    },
    {
      q: {
        tr: "Etkinlik yerine ulaşım nasıl sağlanır?",
        en: "How can I reach the venue?"
      },
      a: {
        tr: "Etkinliğimiz Altınbaş Üniversitesi Bakırköy Sağlık Kampüsü'nde gerçekleştirilecektir. M1A Yenikapı-Atatürk Havalimanı Metrosu Bakırköy/İncirli istasyonuna ve Metrobüs İncirli durağına sadece 4-5 dakika yürüme mesafesindedir. Ayrıca Marmaray Bakırköy istasyonundan minibüs veya otobüsle 8 dakikada ulaşılabilir.",
        en: "The event is held at Altinbas University Bakirkoy Health Campus. It is a 4-5 minute walk from the M1A Metro Bakirkoy/Incirli station and Metrobus Incirli stop. It can also be reached in 8 minutes from Marmaray Bakirkoy station by bus or taxi."
      }
    },
    {
      q: {
        tr: "Sponsorluk veya fuaye stant alanı için kiminle iletişime geçmeliyiz?",
        en: "Who should we contact for sponsorship or exhibition booth space?"
      },
      a: {
        tr: "Sponsorluk ve stant talepleriniz için AUDSA Kulüp Başkanları İlknur Bozdağ (0532 175 01 60) ve Hatice Pamukcuoğlu (0546 736 29 37) veya audsaorg@gmail.com adresi üzerinden doğrudan irtibat kurabilirsiniz.",
        en: "For sponsorship inquiries and booth reservations, please contact AUDSA Club Presidents Ilknur Bozdag (+90 532 175 01 60) and Hatice Pamukcuoglu (+90 546 736 29 37) or email audsaorg@gmail.com directly."
      }
    }
  ],

  organizers: [
    {
      name: "İlknur Bozdağ",
      role: { tr: "AUDSA Kulüp Başkanı", en: "AUDSA Club President" },
      phone: "0532 175 01 60",
      email: "ilknurbozdag16@gmail.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Hatice Pamukcuoglu",
      role: { tr: "AUDSA Kulüp Başkanı", en: "AUDSA Club President" },
      phone: "0546 736 29 37",
      email: "haticepamukcuogluu1@gmail.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarkis Kartun",
      role: { tr: "AUDSA Kulüp Başkan Yardımcısı", en: "AUDSA Vice President" },
      phone: "0535 554 46 89",
      email: "sarkis.kartun@audsa.org",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    }
  ],

  social: {
    instagramClub: "https://instagram.com/audsaorg",
    instagramFaculty: "https://instagram.com/altinbas.facultyofdentistry",
    websiteFaculty: "https://altinbas.edu.tr/fakulteler/dis-hekimligi-fakultesi",
    websiteUniversity: "https://altinbas.edu.tr",
    emailClub: "audsaorg@gmail.com"
  }
};
