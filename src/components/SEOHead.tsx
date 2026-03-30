import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description?: string;
  path?: string;
}

const SEOHead = ({ title, description, path = "/" }: SEOHeadProps) => {
  const siteUrl = "https://firstandthirddesigns.com";
  const fullTitle = path === "/" ? title : `${title} | First & Third Designs`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEOHead;
