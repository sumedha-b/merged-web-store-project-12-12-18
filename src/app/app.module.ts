import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { StorefrontComponent } from './components/storefront/storefront.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ShopReviewComponent } from './components/shop-review/shop-review.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewProductAreaComponent } from './components/landing-page/new-product-area/new-product-area.component';
import { SpeakersComponent } from './components/landing-page/speakers/speakers.component';
import { BestSellersAreaComponent } from './components/landing-page/best-sellers-area/best-sellers-area.component';
import { LadiesClothsComponent } from './components/landing-page/ladies-cloths/ladies-cloths.component';
import { BestSellersComponent } from './components/landing-page/best-sellers/best-sellers.component';
import { ProductDetailsComponent } from './components/prodcuts/product-details/product-details.component';
import { AddProductComponent } from './components/prodcuts/add-product/add-product.component';
import { ListProductsComponent } from './components/prodcuts/list-products/list-products.component';
import { StoriesComponent } from './components/stories/stories.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { SellersProductsComponent } from './components/prodcuts/sellers-products/sellers-products.component';
import { DashboardComponent } from './components/dashboard/admin/dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { PolicyComponent } from './components/policy/policy.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { AffiliantComponent } from './components/affiliant/affiliant.component';
import { OfferComponent } from './components/prodcuts/offer/offer.component';
import { InvoiceComponent } from './components/prodcuts/invoice/invoice.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddVendorComponent } from './components/vendor/add-vendor/add-vendor.component';
import { VendorListComponent } from './components/vendor/vendor-list/vendor-list.component';
import { VendorDetailsComponent } from './components/vendor/vendor-details/vendor-details.component';
import { ScartComponent } from './components/scart/scart.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { CcurrencyPipe } from './pipes/ccurrency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    SignupComponent,
    CheckoutComponent,
    DashboardComponent,
    StorefrontComponent,
    LoginComponent,
    LandingPageComponent,
    ShopReviewComponent,
    SliderComponent,
    NewProductAreaComponent,
    SpeakersComponent,
    BestSellersAreaComponent,
    LadiesClothsComponent,
    BestSellersComponent,
    ProductDetailsComponent,
    AddProductComponent,
    ListProductsComponent,
    StoriesComponent,
    BlogComponent,
    BlogDetailsComponent,
    SellersProductsComponent,
    CategoryComponent,
    SearchComponent,
    FaqComponent,
    ContactComponent,
    PolicyComponent,
    TrackOrderComponent,
    AffiliantComponent,
    OfferComponent,
    InvoiceComponent,
    VendorComponent,
    PartnersComponent,
    ErrorsComponent,
    AboutComponent,
    PageNotFoundComponent,
    AddVendorComponent,
    VendorListComponent,
    VendorDetailsComponent,
    ScartComponent,
    ChangeColorDirective,
    CcurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
