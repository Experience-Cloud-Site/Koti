import { LightningElement } from 'lwc';

export default class CarouselComponent extends LightningElement {
    // Static list of images for the carousel (can be dynamically replaced)
    carouselImages = [
        {
            src: 'https://ddl00000kfe9uuad-dev-ed.develop.lightning.force.com/cms/media/MCUDJRR2HWKJFLFCPIRKLAKKDCJY?version=1.1',
            description: 'Welcome to Koti!',
            altText: 'First image in carousel',
            href: ''
        },
        {
            src: 'https://ddl00000kfe9uuad-dev-ed.develop.lightning.force.com/cms/media/MCOOO7ILNAPBHATDBLHYZ24ITRJY?version=1.1',
            description: 'Our staff is always here to help get your new house!',
            altText: 'Second image in carousel',
            href: ''
        },
        {
            src: 'https://ddl00000kfe9uuad-dev-ed.develop.lightning.force.com/cms/media/MCH6QHFH3N5VGIPJQTPIHW6EICOI?version=1.1',
            description: 'Ask us any questions anytime!',
            altText: 'Third image in carousel',
            href: ''
        },
        {
            src: 'https://ddl00000kfe9uuad-dev-ed.develop.lightning.force.com/cms/media/MC3B3ORORXLBCQFKUHP6N3F6ZZAM?version=1.1',
            description: 'Koti -Find your perfect home effortlessly!',
            altText: 'Fourth image in carousel',
            href: ''
        }
    ];
}