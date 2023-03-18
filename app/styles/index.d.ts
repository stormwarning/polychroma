import * as _vanilla_extract_sprinkles from '@vanilla-extract/sprinkles';

declare const button: string;

declare const Button_button: typeof button;
declare namespace Button {
  export {
    Button_button as button,
  };
}

declare const footer: string;
declare const credit: string;
declare const link$1: string;

declare const Footer_credit: typeof credit;
declare const Footer_footer: typeof footer;
declare namespace Footer {
  export {
    Footer_credit as credit,
    Footer_footer as footer,
    link$1 as link,
  };
}

declare const section$1: string;
declare const figure: string;
declare const code: string;

declare const Gradient_code: typeof code;
declare const Gradient_figure: typeof figure;
declare namespace Gradient {
  export {
    Gradient_code as code,
    Gradient_figure as figure,
    section$1 as section,
  };
}

declare const article: string;
declare const header$1: string;
declare const main: string;
declare const section: string;

declare const Layout_article: typeof article;
declare const Layout_main: typeof main;
declare const Layout_section: typeof section;
declare namespace Layout {
  export {
    Layout_article as article,
    header$1 as header,
    Layout_main as main,
    Layout_section as section,
  };
}

declare const legend: string;

declare const Legend_legend: typeof legend;
declare namespace Legend {
  export {
    Legend_legend as legend,
  };
}

declare const header: string;
declare const title$1: string;
declare const version: string;

declare const Masthead_header: typeof header;
declare const Masthead_version: typeof version;
declare namespace Masthead {
  export {
    Masthead_header as header,
    title$1 as title,
    Masthead_version as version,
  };
}

declare const nav: string;
declare const item: string;

declare const Nav_item: typeof item;
declare const Nav_nav: typeof nav;
declare namespace Nav {
  export {
    Nav_item as item,
    Nav_nav as nav,
  };
}

declare const slider: string;

declare const Slider_slider: typeof slider;
declare namespace Slider {
  export {
    Slider_slider as slider,
  };
}

declare const stack: string;
declare const space: Record<string | number | symbol, string>;

declare const Stack_space: typeof space;
declare const Stack_stack: typeof stack;
declare namespace Stack {
  export {
    Stack_space as space,
    Stack_stack as stack,
  };
}

declare const root: string;
declare const size: Record<string | number | symbol, string>;
declare const weight: Record<string | number | symbol, string>;
declare const leading: Record<string | number | symbol, string>;
declare const tracking: Record<string | number | symbol, string>;

declare const Text_leading: typeof leading;
declare const Text_root: typeof root;
declare const Text_size: typeof size;
declare const Text_tracking: typeof tracking;
declare const Text_weight: typeof weight;
declare namespace Text {
  export {
    Text_leading as leading,
    Text_root as root,
    Text_size as size,
    Text_tracking as tracking,
    Text_weight as weight,
  };
}

declare const link: string;

declare const TextLink_link: typeof link;
declare namespace TextLink {
  export {
    TextLink_link as link,
  };
}

declare const title: string;

declare const Title_title: typeof title;
declare namespace Title {
  export {
    Title_title as title,
  };
}

declare const themeClass: string;
declare const vars: {
    space: {
        0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        4: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        8: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        16: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        32: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        64: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        80: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    color: {
        'grey-100': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        'grey-200': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        'grey-300': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        'grey-400': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        'grey-500': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        'grey-600': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        'grey-700': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        'grey-800': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        'grey-900': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        white: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        black: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    radius: {
        0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        sm: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    size: {
        0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        32: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        none: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        md: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        lg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        full: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        'screen-w': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        'screen-h': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    typography: {
        fontSize: {
            xs: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            sm: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            base: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            '2xl': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            '4xl': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            '5xl': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        fontWeight: {
            normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            semibold: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            bold: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        lineHeight: {
            none: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            relaxed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loose: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        letterSpacing: {
            0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            widest: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
};

declare const sprinkles: ((props: {
    display?: (("none" | "block" | "flex" | "grid" | "inline" | "inline-block" | "inline-flex" | {
        mobile?: "none" | "block" | "flex" | "grid" | "inline" | "inline-block" | "inline-flex" | undefined;
        tablet?: "none" | "block" | "flex" | "grid" | "inline" | "inline-block" | "inline-flex" | undefined;
        desktop?: "none" | "block" | "flex" | "grid" | "inline" | "inline-block" | "inline-flex" | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, "none" | "block" | "flex" | "grid" | "inline" | "inline-block" | "inline-flex" | null>) | undefined;
    position?: (("absolute" | "relative" | "static" | "sticky" | {
        mobile?: "absolute" | "relative" | "static" | "sticky" | undefined;
        tablet?: "absolute" | "relative" | "static" | "sticky" | undefined;
        desktop?: "absolute" | "relative" | "static" | "sticky" | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, "absolute" | "relative" | "static" | "sticky" | null>) | undefined;
    flexDirection?: (("column" | "row" | {
        mobile?: "column" | "row" | undefined;
        tablet?: "column" | "row" | undefined;
        desktop?: "column" | "row" | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, "column" | "row" | null>) | undefined;
    justifyContent?: (("space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | {
        mobile?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        tablet?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        desktop?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | null>) | undefined;
    alignItems?: (("stretch" | "center" | "flex-end" | "flex-start" | {
        mobile?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        tablet?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        desktop?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, "stretch" | "center" | "flex-end" | "flex-start" | null>) | undefined;
    border?: (("none" | {
        mobile?: "none" | undefined;
        tablet?: "none" | undefined;
        desktop?: "none" | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, "none" | null>) | undefined;
    gap?: ((0 | 4 | 8 | 16 | 32 | 64 | 80 | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | null>) | undefined;
    paddingTop?: ((0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null>) | undefined;
    paddingBottom?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
    paddingLeft?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
    paddingRight?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
    inset?: ((0 | 4 | 8 | 16 | 32 | 64 | 80 | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | null>) | undefined;
    top?: ((0 | 4 | 8 | 16 | 32 | 64 | 80 | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | null>) | undefined;
    right?: ((0 | 4 | 8 | 16 | 32 | 64 | 80 | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | null>) | undefined;
    bottom?: ((0 | 4 | 8 | 16 | 32 | 64 | 80 | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | null>) | undefined;
    left?: ((0 | 4 | 8 | 16 | 32 | 64 | 80 | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | null>) | undefined;
    width?: ((0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | {
        mobile?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
        tablet?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
        desktop?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | null>) | undefined;
    maxWidth?: ((0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | {
        mobile?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
        tablet?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
        desktop?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | null>) | undefined;
    height?: ((0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | {
        mobile?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
        tablet?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
        desktop?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | null>) | undefined;
    maxHeight?: ((0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | {
        mobile?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
        tablet?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
        desktop?: 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | "none" | "md" | "lg" | "full" | "screen-w" | "screen-h" | 32 | null>) | undefined;
    marginTop?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
    marginRight?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
    marginBottom?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
    marginLeft?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
    fontSize?: (("sm" | "xs" | "base" | "2xl" | "4xl" | "5xl" | {
        mobile?: "sm" | "xs" | "base" | "2xl" | "4xl" | "5xl" | undefined;
        tablet?: "sm" | "xs" | "base" | "2xl" | "4xl" | "5xl" | undefined;
        desktop?: "sm" | "xs" | "base" | "2xl" | "4xl" | "5xl" | undefined;
    }) | _vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, "sm" | "xs" | "base" | "2xl" | "4xl" | "5xl" | null>) | undefined;
    padding?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
    paddingX?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
    paddingY?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
    placeItems?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, "stretch" | "center" | "flex-end" | "flex-start" | null> | ("stretch" | "center" | "flex-end" | "flex-start" | {
        mobile?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        tablet?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        desktop?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    })) | undefined;
    marginX?: (_vanilla_extract_sprinkles.ResponsiveArray<2 | 1 | 3, 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | null> | (0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | {
        mobile?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        tablet?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
        desktop?: 0 | 4 | 8 | 16 | 32 | 64 | 80 | "auto" | undefined;
    })) | undefined;
} & {
    color?: ("white" | "black" | "grey-100" | "grey-200" | "grey-300" | "grey-400" | "grey-500" | "grey-600" | "grey-700" | "grey-800" | "grey-900" | {
        lightMode?: "white" | "black" | "grey-100" | "grey-200" | "grey-300" | "grey-400" | "grey-500" | "grey-600" | "grey-700" | "grey-800" | "grey-900" | undefined;
        darkMode?: "white" | "black" | "grey-100" | "grey-200" | "grey-300" | "grey-400" | "grey-500" | "grey-600" | "grey-700" | "grey-800" | "grey-900" | undefined;
    }) | undefined;
    background?: ("white" | "black" | "grey-100" | "grey-200" | "grey-300" | "grey-400" | "grey-500" | "grey-600" | "grey-700" | "grey-800" | "grey-900" | {
        lightMode?: "white" | "black" | "grey-100" | "grey-200" | "grey-300" | "grey-400" | "grey-500" | "grey-600" | "grey-700" | "grey-800" | "grey-900" | undefined;
        darkMode?: "white" | "black" | "grey-100" | "grey-200" | "grey-300" | "grey-400" | "grey-500" | "grey-600" | "grey-700" | "grey-800" | "grey-900" | undefined;
    }) | undefined;
}) => string) & {
    properties: Set<"color" | "fontSize" | "alignItems" | "bottom" | "display" | "flexDirection" | "height" | "inset" | "justifyContent" | "left" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "top" | "width" | "background" | "border" | "gap" | "padding" | "placeItems" | "paddingX" | "paddingY" | "marginX">;
};
type Sprinkles = Parameters<typeof sprinkles>[0];

/**
 * Everything exported from this file will be available
 * within the Remix app via the "~/styles" import.
 */

declare const componentStyles: {
    Button: typeof Button;
    Footer: typeof Footer;
    Gradient: typeof Gradient;
    Layout: typeof Layout;
    Legend: typeof Legend;
    Masthead: typeof Masthead;
    Nav: typeof Nav;
    Slider: typeof Slider;
    Stack: typeof Stack;
    Text: typeof Text;
    TextLink: typeof TextLink;
    Title: typeof Title;
};

export { Sprinkles, componentStyles, sprinkles, themeClass, vars };
