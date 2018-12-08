export class AppConfig{

    public static BASE_ENDPOINT = 'http://localhost:4000/v3';
    public static LOGIN_ENDPOINT = AppConfig.BASE_ENDPOINT + '/login';
    public static PRODUCT_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/products';
    public static VENDOR_ENDPOINT = AppConfig.BASE_ENDPOINT + '/admin/vendors';
    public static ADVERTISEMENT_ENDPOINT = AppConfig.BASE_ENDPOINT +"/admin/advertisement";
    //public static IMAGE_ENDPOINT = AppConfig.PROFILES_ENDPOINT + '/images';
}