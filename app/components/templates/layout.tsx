import Alert from "../molecules/alert";
import { Footer } from "../organisms/footer";
import { Meta } from "../meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

export const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
