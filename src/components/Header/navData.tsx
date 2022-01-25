export const navLogo = `https://res.cloudinary.com/arifscloud/image/upload/v1641449099/pizza-logo-2-removebg-preview_l7lk0b.png`;

export const navItems = ['Best Deals', 'Blog', 'Wallets', 'contact us'];

interface Props {
  title: string | boolean;
  classprops?: string;
}
export const NavBarItem: React.FC<Props> = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);
