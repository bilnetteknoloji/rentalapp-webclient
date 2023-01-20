//  ######  Product  ######## //
export interface IProductDATA {
  urunId:number;
  sinifId: number;
  cariId: number;
  urunKodu: string;
  adres: string;
  bolgeId: number;
  ilId: number;
  ilceId: number;
  enlem: number;
  boylam: number;
  semtId : number;
  sadecebizde : boolean;
  durum : boolean;
  videoLink : string;
  urunAdi: string;
  kdvOran: number;
  kdvhesapId : number;
  ozelresimId : number;
  havuz : number;
  tesisId : number;
  booking : number;
  urunKodu2 : string;
  vitrinResmi : boolean;
  icalLink: string;
  yorum: IProductsCommentsDATA;
}
export interface IShowcaseProductsDATA{
  vitrinId: number;
  urunId: number;
  sira: number;
}
export interface IProductsBathsDATA {
  urunbanyoId: number;
  yatakodasiId: number;
  urunId: number;
  metrekare: number;
  kat: number;
  wc: boolean;
  dus: boolean;
  kuvet: boolean;
  jakuzi: boolean;
}
export interface IProductsBedroomsDATA {
  urunyatakodasiId: number;
  urunId: number ;
  metrekare: number;
  kat: number;
  ciftKisilik: number;
  tekKisilik: number;
  ranza: number;
  ilaveYatak: number;
  bebek: number;
  klima: number;
  tv: boolean;
  ozelBanyo: boolean;
}
export interface IProductsCommentsDATA {
  yorumId: number;
  urunId: number;
  adsoyad: string;
  baslik: string;
  yorum: string;
  tarih: number;
  durum: boolean;
  eposta: string;
  puan: number;
}
export interface IProductsPictureDATA {
  ResimId: number;
  UrunId: number;
  Resim: string;
  Sira: number;
  Duzenlendi: boolean;
}
export interface IProductsCategoriesDATA {
  UrunKategoriId: number;
  KategoriId: number;
  urunId: number
}
export interface IProductsPromotionsDATA{
  UrunKampanyaId: number;
  KampanyaId: number;
  UrunId: number;
}
export interface IProductsFeaturesDATA{
  UrunOzellikId: number;
  UrunId: number;
  OzellikId: number;
  BirimId: number;
  Deger: string;

}


//  ######  Features  ######## //
export interface IFeaturesDATA{
  OzellikId: number;
  OzellikgrupId: number;
  Geneltanim: string;
  BirimId: number;
  Durum: boolean;
}
export interface IFeatureGroupsDATA{
  OzellikgrupId: number;
  SinifId: number;
  Geneltanim: string;
  Durum: boolean;
}
export interface IFeatureGroupsLanguageDATA{
  OzellikgrupDilId: number;
  DilId: number;
  OzellikgrupId: number;
  Ozellikgrup: string;
}
export interface IFeaturesLanguageDATA{
  OzellikDilId: number;
  DilId: number;
  OzellikId: number;
  Ozellik: string;
}


//  ######  Country  ######## //
export interface ICountryDATA{
  UlkeId: number;
  Ulke: string;
}
export interface IDistrictDATA{
  BolgeId: number;
  Bolge: number;
  Sira: number;
}
export interface IProvincesDATA{
  IlId: number;
  BolgeId: number;
  Il: string;
  Sira: number;

}
export interface IDistrictsDATA{
  IlceId: number;
  IlId: number;
  Ilce: string;
  Sira: number;
}


//  ######  Languages  ######## //
export interface ILanguagesDATA{
  DilId: number;
  Dil: string;
  DilKod: string;
  DilKisaKod: string;
  DilYon: string;
  Durum: boolean;
}
export interface IProductsLanguagesDATA{
  UrunDilId: number;
  DilId: number;
  UrunId: number;
  Baslik: string;
  Aciklama: string;
  Link: string;
  SiteId: number;
  Tagler: string;
}


//  ######  OccupancyCalendar  ######## //
export interface IFullDaysDATA{
  RezervasyonId: number;
  RezervasyonurunId: number;
  UrunId: number;
  Kullanimbaslangic: string;
  Kullanimbitis: string;
  Durum: boolean;
}
export interface IOccupancyCalendarDATA{
  DolulukId: number;
  UrunId: number;
  Tarih: string;
  RezervasyonId: number;
  Maliyet: number;
  Fiyat: string;
  Durum: boolean;
  BirimId: number;
  Minimum: number;
  GirisGunu: string;

}


//  ######  Price  ######## //
export interface IProductsPriceDATA{
  FiyatId: number;
  UrunId: number;
  Fiyat: number;
  BirimId: number;
  MinimumKiralama: number;
  Baslangic: string;
  Bitis: string;
  Maliyet: number
  GirisGunu: number
  Depozito: string
  DepozitobirimId: number;
  OnodemeOran: string;
  MaliyetbirimId: number;
}
export interface IProductsAdditionalPriceDATA{
  UrunEkfiyatId: number;
  UrunId: number;
  EkhizmetId: number;
  Ucretsiz: boolean;
  Ucretli: boolean;
  Adet: number;
  Kisibasi: boolean
  Gunluk: boolean;
  Haftalik: boolean
  Fiyat: number;
  BirimId: number;
  Saatlik: boolean;
  Istegebagli: boolean;
  Baslangic: string;
  Bitis: number;
  Maliyet: number;
  CariId: number;
  MaliyetbirimId: number;
}
export interface ICurrenciesDATA{
  BirimId: number;
  HesapId: number;
  Sembol: string;
  Birim: string;
  Sagdan: boolean;
  Bosluk: boolean;
  KurSira: string;
  KatSayi: number;
}


//  ######  Campaigns  ######## //
export interface ICampaignsDATA{
  KampanyaId: number;
  Oran: number;
  Tutar: number;
  RezTarihbaslangic: string;
  RezTarihbitis: string;
  Konaklamabaslangic: string;
  Konaklamabitis: string;
  NetOran: number;
  KampanyaAdi: string;
  Sira: number;
}
export interface IProductsCampaignsDATA{
  UrunKampanyaId: number;
  KampanyaId: number;
  UrunId: number;
}
export interface IVwCampaignsDATA{
  UrunId: number;
  SiteId: number;
  UrunKampanyaId: number;
  KampanyaId: number;
  Oran: number;
  Tutar: number;
  RezTarihbaslangic: string;
  RezTarihbitis: string;
  Konaklamabaslangic: string;
  Konaklamabitis: string;
  NetOran: number;
  KampanyaAdi: string;
  Sira: number;
}


//  ######  Reservation  ######## //
export interface IRentalPicturesDATA {
  TalepresimId: number;
  TalepId: number;
  Resim: string;
}
export interface IReservationsProductDATA{
  RezervasyonurunId: number;
  RezervasyonId: number;
  UrunId: number;
  Fiyat: number;
  Kdvoran: number;
  Kdv: number;
  BirimId: number;
  Tutar: number;
  Aciklama: string;
  Kullanimbaslangic: string;
  Kullanimbitis: string;
  IndirimId: number;
  Indirimtutar: number;
  Maliyet: number;
  Girissaat: string
  Cikissaat: string
  Girisyapti: boolean;
  Cikisyapti: boolean;
  Depozito: string;
  DepozitobirimId: number;
  OnodemeOran: string;
  Onodeme: number;
  Alinacakdepozito: number;
}
export interface IRentalRequestsDATA{
  TalepId: number;
  SiteId: number;
  Adsoyad: string;
  Telefon: number;
  Eposta: string;
  Villaadresi: string;
  Odasayi: string;
  Banyosayi: string;
  Yataksayi: string;
  Mesaj: string;
  Durum: boolean;
  Tarih: string;
}
export interface IPreReservationsDATA{
  OnrezervasyonId: number;
  OperatorId: number;
  Musteri: string
  Kisisayi: number;
  Yetiskinsayi: number;
  Bebeksayi: number;
  Eposta: string;
  Telefon: number;
  Giristarihi: string;
  Cikistarihi: string;
  Sonuc: number;
  Nasilbuldu: number;
  Diger: string;
  Notlar: string;
  Tarih: string;
  GorusenOperatorId: number;
  NedenId: number;
  Telefon2: number;
  RezervasyonOperatorId: number;
  OnrezervasyoniptalnedenId: number;
  Iptalneden: string;
  Hatirlatildi: number;
  AcenteId: string;
  CariId: number;
}
export interface IPreReservationsProductDATA{
OnrezervasyonurunId: number;
OnrezervasyonId: number;
UrunId: number;
Tercihedildi: boolean;
Giris: string;
Cikis: string;
Tarih: string;
OnodemeOran: string;
}
export interface IPreReservationsAdditionalServiceDATA{
  OnrezervasyonekhizmetId: number;
  OnrezervasyonId: number;
  EkhizmetId: number;
  Miktar: number;
  Fiyat: number;
}


//  ###### VariablesGroup ######## //
export interface IVariablesGroupDATA{
  DegiskengrupId: number;
  SinifId: number;
  Geneltanim: string;
  Durum: boolean;
  Filtrede: boolean;
}
export interface IVariablesGroupLanguageDATA{
  DegiskengrupDilId: number;
  DilId: number;
  DegiskengrupId: number;
  Degiskengrup: string;
}
export interface IVariablesLanguageDATA{
  DegiskenDilId: number;
  DilId: number;
  DegiskenId: number;
  Degisken: string;
}
export interface IVariablesDATA{
  DegiskenId: number;
  DegiskengrupId: number;
  Geneltanim: string;
  Durum: boolean;
  Filtrede: boolean;
}
export interface IProductsVariablesDATA{
  UrunDegiskenId: number;
  UrunId: number;
  DegiskenId: number;
}


export interface IProductsContractDATA{
  KontratId: number;
  UrunId: number;
  CariId: number;
  KontratAd: string;
  Gecerliliktarih: string;
  Indirimtarih: string;
  Indirimoran: number;
  Indirimkabul: boolean;
  Satiskabul: boolean;
  Cezabedel: string;
  Tarih: string;
  RevizyonNo: number;
}
export interface IPagesDATA {
  sayfaId: number;
  siteId: number;
  dilId: number;
  link: string;
  baslik: string;
  icerik: string;
  tanim: string;
}
export interface IfaqQuestionsDATA {
  soruId: number;
  dilId: number;
  soru: string;
  sira: number;
  cevap: string;
  tip: number;
}





//  ######  CustomLink  ######## //
export interface CustomLink {
  label: string;
  href: string;
  targetBlank?: boolean;
}

//  ##########  PostDataType ######## //
export interface TaxonomyType {
  id: string | number;
  name: string;
  href: string;
  count?: number;
  thumbnail?: string;
  desc?: string;
  color?: TwMainColor | string;
  taxonomy: "category" | "tag";
  listingType?: "stay" | "experiences" | "car";
}

export interface AuthorType {
  id: string | number;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar: string;
  bgImage?: string;
  email?: string;
  count: number;
  desc: string;
  jobName: string;
  href: string;
  starRating?: number;
}

export interface PostDataType {
  id: string | number;
  author: AuthorType;
  date: string;
  href: string;
  categories: TaxonomyType[];
  title: string;
  featuredImage: string;
  desc?: string;
  commentCount: number;
  viewdCount: number;
  readingTime: number;
  postType?: "standard" | "video" | "gallery" | "audio";
}

export type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray";

//
export interface StayDataType {
  id: string | number;
  author: AuthorType;
  date: string;
  href: string;
  title: string;
  featuredImage: string;
  commentCount: number;
  viewCount: number;
  address: string;
  reviewStart: number;
  reviewCount: number;
  like: boolean;
  galleryImgs: string[];
  price: string;
  listingCategory: TaxonomyType;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  saleOff?: string | null;
  isAds: boolean | null;
  map: {
    lat: number;
    lng: number;
  };
}

//
export interface ExperiencesDataType {
  id: string | number;
  author: AuthorType;
  date: string;
  href: string;
  title: string;
  featuredImage: string;
  commentCount: number;
  viewCount: number;
  address: string;
  reviewStart: number;
  reviewCount: number;
  like: boolean;
  galleryImgs: string[];
  price: string;
  listingCategory: TaxonomyType;
  maxGuests: number;
  saleOff?: string | null;
  isAds: boolean | null;
  map: {
    lat: number;
    lng: number;
  };
}

//
export interface CarDataType {
  id: string | number;
  author: AuthorType;
  date: string;
  href: string;
  title: string;
  featuredImage: string;
  commentCount: number;
  viewCount: number;
  address: string;
  reviewStart: number;
  reviewCount: number;
  like: boolean;
  galleryImgs: string[];
  price: string;
  listingCategory: TaxonomyType;
  seats: number;
  gearshift: string;
  saleOff?: string | null;
  isAds: boolean | null;
  map: {
    lat: number;
    lng: number;
  };
}
