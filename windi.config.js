function generateSpacing(types) {
    const variants = [
        {
            size: 'xs',
            mobile: '12px',
            desktop: '16px',
        },
        {
            size: 's',
            mobile: '16px',
            desktop: '24px',
        },
        {
            size: 'm',
            mobile: '40px',
            desktop: '40px',
        },
        {
            size: 'l',
            mobile: '48px',
            desktop: '56px',
        },
        {
            size: 'xl',
            mobile: '72px',
            desktop: '88px',
        },
        {
            size: 'xxl',
            mobile: '88px',
            desktop: '120px',
        }
    ]

    let tmp = {}
    for (const type of types) {
        for (const variant of variants)
            tmp = {
                ...tmp,
                [`${type}-${variant.size}`]: `${type}-${variant.mobile} md:${type}-${variant.desktop}`,
            }
    }
    return tmp
}

export default {
    theme: {

        boxShadow: {
            'buttom': '1px solid #CCCCCC',
            'down_header': '0px 1px 0px #EFEFF0'
        },

        borderWidth: {
            "down": '1px 1px 6px 1px',
        },

        colors: {
            'gradation-100': '#FCFCFD',
            'gradation-200': '#EFEFF0',
            'gradation-300': '#94979E',
            'gradation-400': '#494950',
            'gradation-500': '#242129',
            'gradation-600': '#0C0A10',
    
            'maincolor-gradient': 'linear-gradient(180deg, #EA4C3E 0%, #EC3827 100%)',
            'maincolor-100': '#F8D6D3',
            'maincolor-200': '#EA4C3E',
            'maincolor-300': '#E33F31',
            'maincolor-400': '#BC3024',
    
            'red-100': '#ED5A5A',
            'red-200': '#E43A3A',
            'red-300': '#BC2424',
    
            'green-100': "#5AED77",
            'green-200': "#2CC94B",
            'green-300': "#22B43F",
    
            'tint-25': "#0C0A1040",
            'tint-50': "#0C0A1080",
            'tint-75': "#0C0A10BF"
        },
    
        fontFamily: {

            inter: ['Inter', 'sans-serif'],
            raleway: ['Raleway', 'sans-serif'],

        },

    },
    shortcuts: {
        //Text block

        'desktop-h1': 'font-raleway lining-nums font-extrabold leading-[122%] tracking-0.025em text-72px',
        'desktop-h2': 'font-raleway lining-nums font-extrabold leading-[121%] tracking-0.025em text-56px',
        'desktop-h3': 'font-raleway lining-nums font-extrabold leading-[125%] tracking-0.025em text-48px',
        'desktop-h4': 'font-raleway lining-nums font-extrabold leading-[125%] tracking-0.025em text-32px',
        'desktop-h5': 'font-raleway lining-nums font-extrabold leading-[133%] tracking-0.025em text-24px',

        'desktop-headline': 'font-raleway lining-nums font-bold leading-[120%] text-20px',
        'desktop-bigtext': 'font-inter lining-nums font-normal leading-[150%] text-16px',
        'desktop-bodytext': 'font-inter lining-nums font-normal leading-[145%] text-14px',
        'desktop-tabletext': 'font-inter lining-nums font-normal leading-[150%] text-12px',
        'desktop-tinytext': 'font-inter lining-nums font-normal leading-[150%] text-8px',

        'span-bold': 'font-raleway lining-nums font-bold leading-[114%] text-14px',
        'span-medium': 'font-raleway lining-nums font-medium leading-[114%] text-14px',
        'smallspan-bold': 'font-raleway lining-nums font-bold leading-[133%] text-12px',
        'smallspan-medium': 'font-raleway lining-nums font-normal leading-[133%] text-12px',
        'bigspan-bold': 'font-raleway lining-nums font-bold leading-[100%] text-16px',
        'bigspan-medium': 'font-raleway lining-nums font-normal leading-[100%] text-16px',

        //Buttons

        'btn-primary': "border-0 span-bold bg-maincolor-200 text-gradation-100 not-disabled:( bg-maincolor-300 border-solid rounded-4px border-down border-maincolor-400 text-gradation-100 hover:(bg-maincolor-200 shadow shadow-maincolor-400) active:(bg-maincolor-400 shadow-none) ) focus:outline-none transition",
        'btn-secondary': "border-0 span-medium bg-gradation-100 text-gradation-400 not-disabled:( bg-gradation-100 border-gradation-200 rounded-4px border-down hover:(bg-gradation-100 border-gradation-300) active:(border-primary) ) focus:outline-none transition",


        ...generateSpacing(['space-x', 'space-y', 'p', 'px', 'py', 'w', 'h', 'pl', 'pr', 'pt', 'pb'])
    },
    
}
