import Header from './components/Header';
import vazirFont from './constants/localFont';
import './styles/globals.css';

//const geistSans = localFont({
//  src: './fonts/GeistVF.woff',
//  variable: '--font-geist-sans',
//  weight: '100 900',
//});
//const geistMono = localFont({
//  src: './fonts/GeistMonoVF.woff',
//  variable: '--font-geist-mono',
//  weight: '100 900',
//});
//
export const metadata = {
  title: {
    template: '%s | بلاگ اپ',
    default: 'بلاگ اپ', // a default is required when creating a template
  },
  description: 'وب اپلیکیشن مدیریت بلاگ ها',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Header />
        <div className="container"> {children}</div>
      </body>
    </html>
  );
}
