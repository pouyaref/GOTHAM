import { FiShield, FiDollarSign, FiAward, FiCheckCircle, FiClock } from 'react-icons/fi';

const KalafProductsSection = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-base-content">
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary"></span>
              <span className="relative z-10">محصولات کالاف دیوتی</span>
            </span>
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            خرید امن اکانت و آیتم‌های بازی کالاف دیوتی موبایل
          </p>
        </div>

        {/* Product Tabs */}
        <div className="tabs tabs-boxed bg-base-200 max-w-md mx-auto mb-8">
          {['اکانت‌ها', 'اسلحه‌ها', 'CP', 'ویژه'].map((tab, index) => (
            <button 
              key={index}
              className={`tab ${index === 0 ? 'tab-active' : ''} text-base-content`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
              <figure className="px-4 pt-4">
                <img 
                  src={`https://fakeimg.pl/300x200/4a5568/ffffff?text=Kalaf+${item}`} 
                  alt={`اکانت کالاف ${item}`}
                  className="rounded-xl h-40 w-full object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <div className="flex justify-between items-start">
                  <h3 className="card-title text-base">اکانت لجندری فصل {item}</h3>
                  <span className="badge badge-primary">جدید</span>
                </div>
                <ul className="text-sm text-base-content/80 space-y-1 my-2">
                  <li className="flex items-center">
                    <FiCheckCircle className="ml-1 text-success" />
                    لول 150+
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="ml-1 text-success" />
                    {item * 5} اسلحه افسانه‌ای
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="ml-1 text-success" />
                    حساب اصلی
                  </li>
                </ul>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="line-through text-error text-sm">1,850,000 تومان</p>
                    <p className="font-bold text-lg">1,290,000 تومان</p>
                  </div>
                  <button className="btn btn-primary btn-sm">خرید</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-base-200 rounded-box p-6">
          <div className="flex flex-col md:flex-row justify-around items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <FiShield className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-base-content">تضمین کیفیت</h4>
                <p className="text-sm text-base-content/70">7 روز گارانتی بازگشت وجه</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <FiClock className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-base-content">پشتیبانی 24/7</h4>
                <p className="text-sm text-base-content/70">همه روزه پاسخگوی شما هستیم</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <FiDollarSign className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-base-content">پرداخت امن</h4>
                <p className="text-sm text-base-content/70">از طریق درگاه بانکی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KalafProductsSection;