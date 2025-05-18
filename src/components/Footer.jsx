import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-16 border-t border-base-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">GOT<span className="text-primary">HAM</span></span>
            </div>
            <p className="text-sm opacity-80">
              ارائه بهترین خدمات و محصولات مرتبط با بازی کالاف دیوتی موبایل با تضمین کیفیت و پشتیبانی 24 ساعته
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {[
                { icon: <FiFacebook className="text-lg" />, label: 'Facebook' },
                { icon: <FiTwitter className="text-lg" />, label: 'Twitter' },
                { icon: <FaTelegram className="text-lg" />, label: 'Telegram' },
                { icon: <FiInstagram className="text-lg" />, label: 'Instagram' },
                { icon: <FiYoutube className="text-lg" />, label: 'YouTube' }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="bg-base-300 p-2 rounded-full hover:bg-primary hover:text-white transition"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">لینک‌های سریع</h3>
            <ul className="space-y-2 text-sm">
              {[
                'صفحه اصلی',
                'محصولات کالاف',
                'اکانت‌های ویژه',
                'مقالات آموزشی',
                'پرسش‌های متداول'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-primary transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">محصولات</h3>
            <ul className="space-y-2 text-sm">
              {[
                'اکانت‌های لجندری',
                'اکانت‌های اسلحه',
                'شارژ مستقیم CP',
                'اکانت‌های وی آی پی',
                'پکیج‌های تخفیفی'
              ].map((product, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-primary transition">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">راه‌های ارتباطی</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FiMapPin className="mt-1 ml-2 text-primary" />
                <span>تهران، خیابان آزادی، پلاک ۱۲۳</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="ml-2 text-primary" />
                <a href="tel:+982112345678">۰۲۱-۱۲۳۴۵۶۷۸</a>
              </li>
              <li className="flex items-center">
                <FiMail className="ml-2 text-primary" />
                <a href="mailto:info@gotham.ir">info@gotham.ir</a>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">عضویت در خبرنامه</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="ایمیل شما" 
                  className="input input-bordered input-sm rounded-l-none w-full" 
                />
                <button className="btn btn-primary btn-sm rounded-r-none">
                  ارسال
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-base-300 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-2 md:mb-0">
              © {new Date().getFullYear()} گاتهام. تمامی حقوق محفوظ است.
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="hover:text-primary transition">قوانین و مقررات</a>
              <a href="#" className="hover:text-primary transition">حریم خصوصی</a>
            </div>
          </div>
        </div>
      </div>
      <a href="https://pouyaaref.ir/" className="text-center" >طراحی شده توسط پویا عارف</a>
    </footer>
    
  );
};

export default Footer;