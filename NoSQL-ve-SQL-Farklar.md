# NoSQL ve SQL Farkları

| NoSQL|SQL |
| :------------- | -------------: |
|İlişkisel olmayan veritabanları, düşük gecikme süreli uygulamaları içeren çeşitli veri erişimi desenleri için tasarlanmıştır. NoSQL arama veritabanları, yarı yapılandırılmış veriler üzerinde analiz için tasarlanmıştır. |İlişkisel veritabanları işlemsel ve yüksek tutarlılığa sahip çevrimiçi işlemleri gerçekleştirebilen (OLTP) uygulamaları için tasarlanmıştır. Çevrimiçi analitik işlemleri (OLAP) için uygun olmaktadır.|
|İlişkisel olmayan veritabanları, performans ve ölçek için optimize edilmiş anahtar-değer, belge ve grafik gibi çeşitli veri modelleri sağlamaktadır.|İlişkisel veritabanları, verileri satır ve sütunlardan oluşan tablolar halinde normalleştirir. Tablolar, satılar, sütunlar, dizinler, tablolar arasındaki ilişkiler ve diğer veritabanı öğeleri bir şema tarafından kesin bir şeklilde tanımlanır. Veritabanı, tablolar arasındaki ilişkilerde başvurusal bütünlük uygulamaktadır.|
|İlişkisel olmayan veritabanları, yatay olarak ölçeklendirilebilen daha esnek bir veri modeli sağlamak için genellikle ilişkisel veritabanlarının bazı ACID özelliklerini esneterek bunlardan ödün vermektedirler. Bu, tek bir bulut sunucusunun ulaşamayacağı derecede yatay ölçeklendirme gerektiren yüksek performanslı, düşük gecikme süreli kullanım örnekleri için NoSQL veritabanlarının mükemmel bir seçim olmasını sağlamaktadır.|İlişkisel veritabanları bölünmezlik, tutarlılık, yalıtım ve dayanıklılık(ACID) özelliklerini sağlar.|
|   |   |


> Yararlanılan Kaynak: https://aws.amazon.com/tr/nosql/