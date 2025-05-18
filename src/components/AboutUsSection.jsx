import { FiAward, FiUsers, FiCheckCircle, FiStar } from 'react-icons/fi';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-base-100">
      {/* About Us Section */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary"></span>
              <span className="relative z-10">درباره گاتهام</span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-right">
            <h3 className="text-2xl font-bold">
              داستان ما از یک باور ساده شروع شد
            </h3>
            <p className="leading-relaxed">
              در سال ۱۳۹۵، تیمی کوچک از متخصصان با یک دیدگاه مشترک گرد هم آمدیم: 
              <span className="text-primary font-medium"> "خلق تجربه‌های دیجیتال فراموش‌نشدنی" </span> 
              امروز گاتهام به خانواده‌ای از ۵۰ متخصص خلاق تبدیل شده که روزانه برای تحول کسب‌وکارها تلاش می‌کنیم.
            </p>
            <ul className="space-y-3">
              {[
                "✅ بیش از ۸ سال تجربه در طراحی و توسعه",
                "✅ تیم متخصص و متعهد",
                "✅ رویکرد مشتری‌محور",
                "✅ تضمین کیفیت خدمات"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-right">
                  <span className="ml-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-base-200 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="تیم گاتهام"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Satisfied Customers Section */}
        <div className="bg-primary text-primary-content rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <FiStar className="mx-auto text-secondary text-4xl mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold">
              مشتریان راضی ما
            </h3>
            <p className="opacity-80 mt-2">
              آنچه مشتریان درباره تجربه همکاری با ما می‌گویند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "همکاری با گاتهام تحول عظیمی در کسب‌وکار ما ایجاد کرد. تیم حرفه‌ای و دلسوزی دارند.",
                name: "شرکت دانش‌بنیان آروین",
                role: "مدیر عامل"
              },
              {
                quote: "پس از سالها تجربه با شرکت‌های مختلف، گاتهام را به همه توصیه می‌کنم. کیفیت کارشان مثال زدنی است.",
                name: "فروشگاه اینترنتی مدیا",
                role: "مدیر فنی"
              },
              {
                quote: "پشتیبانی 24 ساعته و توجه به جزئیات، گاتهام را از دیگران متمایز کرده است.",
                name: "استارتاپ نوبیتکس",
                role: "موسس"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-primary-focus p-6 rounded-xl border border-primary hover:border-secondary transition-all"
              >
                <div className="mb-4 text-right">
                  "{testimonial.quote}"
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                  <p className="opacity-80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: <FiUsers size={28} />, value: "200+", label: "مشتری دائمی" },
              { icon: <FiCheckCircle size={28} />, value: "98%", label: "رضایت مشتری" },
              { icon: <FiAward size={28} />, value: "25+", label: "جایزه معتبر" },
              { icon: <FiStar size={28} />, value: "4.9", label: "میانگین امتیاز" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-secondary mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="opacity-80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;