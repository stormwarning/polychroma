import { Box, Button } from '~/components';
import { componentStyles } from '~/styles';

const styles = componentStyles.Gradient;

export function Gradient() {
  let gradientCSS =
    'linear-gradient(30deg, #000080 0%, #003a91 16%, #00659c 33%, #0092a5 50%, #00c353 66%, #73ea00 83%, #ffff00 100%)';
  let copyButtonText = 'Copy';
  let shareButtonText = 'Share';

  function copyCSS(css) {}
  function shareURL() {}

  return (
    <Box
      as="section"
      className={styles.section}
      position="sticky"
      top={{ desktop: 0 }}
      bottom={{ desktop: 0 }}
      height={{ desktop: 'screen-h' }}
      style={{ backgroundImage: gradientCSS }}
    >
      <Box
        as="figure"
        className={styles.figure}
        display={['none', 'none', 'block']}
        width="full"
        maxWidth="lg"
      >
        <Box as="pre" className={styles.code} paddingX={32} paddingY={64}>
          <code>{gradientCSS}</code>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-end"
        gap={16}
        paddingX={32}
        paddingY={64}
      >
        <Button onClick={copyCSS(gradientCSS)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
          <span className="relative ml-1 lg:ml-2 leading-none">
            {copyButtonText}
          </span>
        </Button>
        <Button onClick={shareURL}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <span className="relative ml-1 lg:ml-2 leading-none">
            {shareButtonText}
          </span>
        </Button>
      </Box>
    </Box>
  );
}
