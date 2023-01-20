import {
    IProductDATA,
    IShowcaseProductsDATA,
    IProductsBathsDATA,
    IProductsBedroomsDATA,
    IProductsCommentsDATA,
    IProductsPictureDATA,
    IRentalPicturesDATA,
    IProductsCategoriesDATA,
    IProductsPromotionsDATA,
    IProductsFeaturesDATA,
    IFeaturesDATA,
    IFeatureGroupsDATA,
    IFeatureGroupsLanguageDATA,
    IFeaturesLanguageDATA,
    ICountryDATA,
    IDistrictDATA,
    IProvincesDATA,
    IDistrictsDATA,
    ILanguagesDATA,
    IProductsLanguagesDATA,
    IFullDaysDATA,
    IOccupancyCalendarDATA,
    IProductsPriceDATA,
    IProductsAdditionalPriceDATA,
    ICurrenciesDATA,
    ICampaignsDATA,
    IProductsCampaignsDATA,
    IVwCampaignsDATA,
    IReservationsProductDATA,
    IRentalRequestsDATA,
    IPreReservationsDATA,
    IPreReservationsProductDATA,
    IPreReservationsAdditionalServiceDATA,
    IVariablesGroupDATA,
    IVariablesGroupLanguageDATA,
    IVariablesLanguageDATA, IVariablesDATA, IProductsVariablesDATA, IProductsContractDATA, IPagesDATA, IfaqQuestionsDATA
} from "./types";
import axios from "axios";
import * as endpoints from '../data/endpoints';
import {list} from "postcss";

console.log(endpoints.http);
const request = {
    get: (url: string) => axios.get(url).then(response => response.data),
    post: (url: string, body: any) => axios.post(url, body).then(response => response.data),
    put: (url: string, body: any) => axios.put(url, body).then(response => response.data),
    del: (url: string) => axios.delete(url).then(response => response.data)
};


//  ######  Product  ######## //
const Products = {
    list: (params: URLSearchParams): Promise<IProductDATA> =>
        axios
            .get("/GetAllUrunler", { params: params })
            .then(response => response.data),
    details: (urunId: string) => request.get(`/GetAllUrunById/${urunId}`),
    create: (products: IProductDATA) => request.post("/UpdateUrunler", products),
    update: (products: IProductDATA) =>
        request.put(`/InsertLanguage/${products.urunId}`, products),
    delete: (urunId: number) => request.del(`/DeleteUrunlerById/${urunId}`),
    attend: (urunId: number) => request.post(`/UpdateUrunler/${urunId}/attend`, {}),
    unattend: (urunId: string) => request.del(`/DeleteUrunlerById/${urunId}/attend`)
};
const ShowcaseProducts = {
    list: (params: URLSearchParams): Promise<IShowcaseProductsDATA> =>
        axios
            .get("/GetAllVitrinUrunleri", { params: params })
            .then(response => response.data),
    details: (id: string) => request.get(`/GetAllVitrinUrunById/${id}`),
    create: (products: IProductDATA) => request.post("/UpdateVitrinUrunler", products),
    update: (products: IProductDATA) => request.put(`/InsertVitrinUrunleri/${products.urunId}`, products),
    delete: (urunId: number) => request.del(`/DeleteVitrinUrunlerById/${urunId}`),
    attend: (urunId: number) => request.post(`/UpdateVitrinUrunler/${urunId}/attend`, {}),
    unattend: (urunId: string) => request.del(`/DeleteVitrinUrunlerById/${urunId}/attend`)
};
const ProductsBaths = {
    list: (params: URLSearchParams): Promise<IProductsBathsDATA> =>
        axios
            .get("/GetAllUrunlerBanyolar", { params: params })
            .then(response => response.data),
    details: (id: string) => request.get(`/GetAllUrunlerBanyolarById/${id}`),
    create: (products: IProductDATA) => request.post("/UpdateUrunlerBanyolar", products),
    update: (products: IProductDATA) => request.put(`/InsertUrunlerBanyolar/${products.urunId}`, products),
    delete: (urunId: number) => request.del(`/DeleteUrunlerBanyolar/${urunId}`),
    attend: (urunId: number) => request.post(`/UpdateUrunlerBanyolar/${urunId}/attend`, {}),
    unattend: (urunId: string) => request.del(`/DeleteUrunlerBanyolar/${urunId}/attend`)
};
const ProductsBedrooms = {
    list: (params: URLSearchParams): Promise<IProductsBedroomsDATA> =>
        axios
            .get("/GetAllUrunlerYatakOdalari", { params: params })
            .then(response => response.data),
    details: (UrunyatakodasiId: string) => request.get(`/GetAllUrunlerYatakOdalariById/${UrunyatakodasiId}`),
    create: (urunyatakodasi: IProductsBedroomsDATA) => request.post("/UpdateUrunlerYatakOdalari", urunyatakodasi),
    update: (urunyatakodasi: IProductsBedroomsDATA) => request.put(`/InsertUrunlerYatakOdalari/${urunyatakodasi.urunyatakodasiId}`, urunyatakodasi),
    delete: (UrunyatakodasiId: number) => request.del(`/DeleteUrunYatakOdalari/${UrunyatakodasiId}`),
    attend: (UrunyatakodasiId: number) => request.post(`/UpdateUrunlerYatakOdalari/${UrunyatakodasiId}/attend`, {}),
    unattend: (UrunyatakodasiId: string) => request.del(`/DeleteUrunYatakOdalari/${UrunyatakodasiId}/attend`)
};
const ProductsComments = {
    list: (params: URLSearchParams): Promise<IProductsCommentsDATA> =>
        axios
            .get("/GetAllUrunlerYorum", { params: params })
            .then(response => response.data),
    details: (YorumId: string) => request.get(`/GetUrunlerYorumById/${YorumId}`),
    create: (urunleryorum: IProductsCommentsDATA) => request.post("/UpdateUrunlerYorum", urunleryorum),
    update: (urunleryorum: IProductsCommentsDATA) => request.put(`/InsertUrunlerYorum/${urunleryorum.yorumId}`, urunleryorum),
    delete: (yorumId: number) => request.del(`/DeleteUrunlerYorum/${yorumId}`),
    attend: (yorumId: number) => request.post(`/UpdateUrunlerYorum/${yorumId}/attend`, {}),
    unattend: (yorumId: string) => request.del(`/DeleteUrunlerYorum/${yorumId}/attend`)
};
const ProductsPicture = {
    list: (params: URLSearchParams): Promise<IProductsPictureDATA> =>
        axios
            .get("/GetAllUrunlerResims", { params: params })
            .then(response => response.data),
    details: (ResimId: string) => request.get(`/GetUrunlerResimById/${ResimId}`),
    create: (urunlerresim: IProductsPictureDATA) => axios.post("/UpdateUrunResim", urunlerresim, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (urunlerresim: IProductsPictureDATA) => request.put(`/InsertUrunlerResim/${urunlerresim.ResimId}`, urunlerresim),
    delete: (ResimId: number) => request.del(`/DeleteUrunlerResimById/${ResimId}`),
    attend: (ResimId: number) => request.post(`/UpdateUrunResim/${ResimId}/attend`, {}),
    unattend: (ResimId: string) => request.del(`/DeleteUrunlerResimById/${ResimId}/attend`)
};
const ProductsCategories= {
    list: (params: URLSearchParams): Promise<IProductsCategoriesDATA> =>
        axios
            .get("GetAllUrunlerKategorilers", { params: params })
            .then(response => response.data),
        details: (urunKategoriId: string) => request.get(`/GetUrunlerKategorilerById/${urunKategoriId}`),
        create: (urunkategoriler: IProductsCategoriesDATA) => axios.post("/UpdateUrunlerKategoriler", urunkategoriler, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
        update: (urunkategoriler: IProductsCategoriesDATA) => request.put(`/InsertUrunlerKategoriler/${urunkategoriler.UrunKategoriId}`, urunkategoriler),
        delete: (urunKategoriId: number) => request.del(`/DeleteUrunlerKategorilerById/${urunKategoriId}`),
        attend: (urunKategoriId: number) => request.post(`/UpdateUrunlerKategoriler/${urunKategoriId}/attend`, {}),
        unattend: (urunKategoriId: string) => request.del(`/DeleteUrunlerKategorilerById/${urunKategoriId}/attend`)

};
const ProductsPromotions= {
    list: (params: URLSearchParams): Promise<IProductsPromotionsDATA> =>
        axios
            .get("GetAllUrunlerKampanyalars", { params: params })
            .then(response => response.data),
    details: (KampanyaId: string) => request.get(`/GetUrunlerKampanyalarById/${KampanyaId}`),
    create: (urunkampanya: IProductsPromotionsDATA) => axios.post("/UpdateUrunlerKampanyalar", urunkampanya, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (urunkampanya: IProductsPromotionsDATA) => request.put(`/InsertUrunlerKampanyalar/${urunkampanya.KampanyaId}`, urunkampanya),
    delete: (KampanyaId: number) => request.del(`/DeleteUrunlerKampanyalarById/${KampanyaId}`),
    attend: (KampanyaId: number) => request.post(`/UpdateUrunlerKampanyalar/${KampanyaId}/attend`, {}),
    unattend: (KampanyaId: string) => request.del(`/DeleteUrunlerKampanyalarById/${KampanyaId}/attend`)

};
const ProductsFeatures= {
    list: (params: URLSearchParams): Promise<IProductsFeaturesDATA> =>
        axios
            .get("GetAllUrunlerOzelliklers", { params: params })
            .then(response => response.data),
    details: (UrunOzellikId: string) => request.get(`/GetUrunlerOzelliklerById/${UrunOzellikId}`),
    create: (urunozellikler: IProductsFeaturesDATA) => axios.post("/UpdateUrunOzellikler", urunozellikler, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (urunozellikler: IProductsFeaturesDATA) => request.put(`/InsertUrunlerOzellikler/${urunozellikler.UrunOzellikId}`, urunozellikler),
    delete: (UrunOzellikId: number) => request.del(`/DeleteUrunlerOzellikler/${UrunOzellikId}`),
    attend: (UrunOzellikId: number) => request.post(`/UpdateUrunOzellikler/${UrunOzellikId}/attend`, {}),
    unattend: (UrunOzllikId: string) => request.del(`/DeleteUrunlerOzellikler/${UrunOzllikId}/attend`)

};


//  ######  Features  ######## //
const FeatureGroups= {
    list: (params: URLSearchParams): Promise<IFeatureGroupsDATA> =>
        axios
            .get("GetAllOzellikgruplars", { params: params })
            .then(response => response.data),
    details: (OzellikgrupId: string) => request.get(`/GetOzellikgruplarById/${OzellikgrupId}`),
    create: (ozellikgruplar: IFeatureGroupsDATA) => axios.post("/UpdateOzellikgruplar", ozellikgruplar, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (ozellikgruplar: IFeatureGroupsDATA) => request.put(`/InsertOzellikgruplar/${ozellikgruplar.OzellikgrupId}`, ozellikgruplar),
    delete: (OzellikgrupId: number) => request.del(`/DeleteOzellikgruplarById/${OzellikgrupId}`),
    attend: (OzellikgrupId: number) => request.post(`/UpdateOzellikgruplar/${OzellikgrupId}/attend`, {}),
    unattend: (OzellikgrupId: string) => request.del(`/DeleteOzellikgruplarById/${OzellikgrupId}/attend`)

};
const Features= {
    list: (params: URLSearchParams): Promise<IFeaturesDATA> =>
        axios
            .get("GetAllOzelliklers", { params: params })
            .then(response => response.data),
    details: (OzellikId: string) => request.get(`/GetOzelliklerById/${OzellikId}`),
    create: (ozellikler: IFeaturesDATA) => axios.post("/UpdateOzellikler", ozellikler, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (ozellikler: IFeaturesDATA) => request.put(`/InsertOzellikler/${ozellikler.OzellikId}`, ozellikler),
    delete: (OzellikId: number) => request.del(`/DeleteOzelliklerById/${OzellikId}`),
    attend: (OzellikId: number) => request.post(`/UpdateOzellikler/${OzellikId}/attend`, {}),
    unattend: (OzllikId: string) => request.del(`/DeleteOzelliklerById/${OzllikId}/attend`)

};
const FeatureGroupLanguages= {
    list: (params: URLSearchParams): Promise<IFeatureGroupsLanguageDATA> =>
        axios
            .get("GetAllOzellikgruplarDils", { params: params })
            .then(response => response.data),
    details: (OzellikgrupDilId: string) => request.get(`/GetOzellikgruplarDilById/${OzellikgrupDilId}`),
    create: (ozellikgrupDil: IFeatureGroupsLanguageDATA) => axios.post("/UpdateOzellikgruplarDil", ozellikgrupDil, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (ozellikgrupDil: IFeatureGroupsLanguageDATA) => request.put(`/InsertOzellikgruplarDil/${ozellikgrupDil.OzellikgrupDilId}`, ozellikgrupDil),
    delete: (OzellikgrupDilId: number) => request.del(`/DeleteOzellikgruplarDilById/${OzellikgrupDilId}`),
    attend: (OzellikgrupDilId: number) => request.post(`/UpdateOzellikgruplarDil/${OzellikgrupDilId}/attend`, {}),
    unattend: (OzellikgrupDilId: string) => request.del(`/DeleteOzellikgruplarDilById/${OzellikgrupDilId}/attend`)

};
const FeatureLanguages= {
    list: (params: URLSearchParams): Promise<IFeaturesLanguageDATA> =>
        axios
            .get("GetAllOzelliklerDils", { params: params })
            .then(response => response.data),
    details: (OzellikDilId: string) => request.get(`/GetOzellikDilById/${OzellikDilId}`),
    create: (ozellikDil: IFeaturesLanguageDATA) => axios.post("/UpdateOzellikDil", ozellikDil, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (ozellikDil: IFeaturesLanguageDATA) => request.put(`/InsertOzellikDil/${ozellikDil.OzellikDilId}`, ozellikDil),
    delete: (OzellikDilId: number) => request.del(`/DeleteOzellikDilById/${OzellikDilId}`),
    attend: (OzellikDilId: number) => request.post(`/UpdateOzellikDil/${OzellikDilId}/attend`, {}),
    unattend: (OzellikDilId: string) => request.del(`/DeleteOzellikDilById/${OzellikDilId}/attend`)
};


//  ######  Country  ######## //
const Country= {
    list: (params: URLSearchParams): Promise<ICountryDATA> =>
        axios
            .get("GetAllUlkes", { params: params })
            .then(response => response.data),
    details: (UlkeId: string) => request.get(`/GetUlkelerById/${UlkeId}`),
    create: (ulke: ICountryDATA) => axios.post("/UpdateUlkeler", ulke, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (ulke: ICountryDATA) => request.put(`/InsertUlkerler/${ulke.UlkeId}`, ulke),
    delete: (UlkeId: number) => request.del(`/DeleteUlkeler/${UlkeId}`),
    attend: (UlkeId: number) => request.post(`/UpdateUlkeler/${UlkeId}/attend`, {}),
    unattend: (UlkeId: string) => request.del(`/DeleteUlkeler/${UlkeId}/attend`)
};
const District= {
    list: (params: URLSearchParams): Promise<IDistrictDATA> =>
        axios
            .get("GetAllBolgelers", { params: params })
            .then(response => response.data),
    details: (BolgeId: string) => request.get(`/GetBolgelerById/${BolgeId}`),
    create: (bolge: IDistrictDATA) => axios.post("/UpdateBolgeler", bolge, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (bolge: IDistrictDATA) => request.put(`/InsertBolgeler/${bolge.BolgeId}`, bolge),
    delete: (BolgeId: number) => request.del(`/DeleteBolgeler/${BolgeId}`),
    attend: (BolgeId: number) => request.post(`/UpdateBolgeler/${BolgeId}/attend`, {}),
    unattend: (BolgeId: string) => request.del(`/DeleteBolgeler/${BolgeId}/attend`)
};
const Provinces= {
    list: (params: URLSearchParams): Promise<IProvincesDATA> =>
        axios
            .get("GetAllIllers", { params: params })
            .then(response => response.data),
    details: (IlId: string) => request.get(`/GetIllerById/${IlId}`),
    create: (iller: IProvincesDATA) => axios.post("/UpdateIller", iller, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (iller: IProvincesDATA) => request.put(`/InsertIller/${iller.IlId}`, iller),
    delete: (IlId: number) => request.del(`/DeleteIlller/${IlId}`),
    attend: (IlId: number) => request.post(`/UpdateIller/${IlId}/attend`, {}),
    unattend: (IlId: string) => request.del(`/DeleteIlller/${IlId}/attend`)
};
const Districts= {
    list: (params: URLSearchParams): Promise<IDistrictsDATA> =>
        axios
            .get("GetAllIlcelers", { params: params })
            .then(response => response.data),
    details: (IlceId: string) => request.get(`/GetIlcelerById/${IlceId}`),
    create: (ilce: IDistrictsDATA) => axios.post("/UpdateIlceler", ilce, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (ilce: IDistrictsDATA) => request.put(`/InsertIlceler/${ilce.IlceId}`, ilce),
    delete: (IlceId: number) => request.del(`/DeleteIlceler/${IlceId}`),
    attend: (IlceId: number) => request.post(`/UpdateIlceler/${IlceId}/attend`, {}),
    unattend: (IlceId: string) => request.del(`/DeleteIlceler/${IlceId}/attend`)
};


//  ######  Languages  ######## //
const Languages= {
    list: (params: URLSearchParams): Promise<ILanguagesDATA> =>
        axios
            .get("GetAllDillers", { params: params })
            .then(response => response.data),
    details: (DilId: string) => request.get(`/GetDillerById/${DilId}`),
    create: (dil: ILanguagesDATA) => axios.post("/UpdateDiller", dil, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (dil: ILanguagesDATA) => request.put(`/InsertDiller/${dil.DilId}`, dil),
    delete: (DilId: number) => request.del(`/DeleteDiller/${DilId}`),
    attend: (DilId: number) => request.post(`/UpdateDiller/${DilId}/attend`, {}),
    unattend: (DilId: string) => request.del(`/DeleteDiller/${DilId}/attend`)
};
const ProductsLanguages= {
    list: (params: URLSearchParams): Promise<IProductsLanguagesDATA> =>
        axios
            .get("GetAllUrunlerDiller", { params: params })
            .then(response => response.data),
    details: (UrunDilId: string) => request.get(`/GetUrunlerDillerById/${UrunDilId}`),
    create: (urundil: IProductsLanguagesDATA) => axios.post("/UpdateUrunlerDil", urundil, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (urundil: IProductsLanguagesDATA) => request.put(`/InsertUrunlerDil/${urundil.UrunDilId}`, urundil),
    delete: (UrunDilId: number) => request.del(`/DeleteUrunlerDil/${UrunDilId}`),
    attend: (UrunDilId: number) => request.post(`/UpdateUrunlerDil/${UrunDilId}/attend`, {}),
    unattend: (UrunDilId: string) => request.del(`/DeleteUrunlerDil/${UrunDilId}/attend`)
};


//  ######  OccupancyCalendar  ######## //
const FullDays= {
    list: (params: URLSearchParams): Promise<IFullDaysDATA> =>
        axios
            .get("GetAllVwdolugunlers", { params: params })
            .then(response => response.data),
    details: (RezervasyonId: string) => request.get(`/GetVwdolugunlerById/${RezervasyonId}`),
    create: (dolugun: IFullDaysDATA) => axios.post("/UpdateVwdolugunler", dolugun, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (dolugun: IFullDaysDATA) => request.put(`/InsertVwdolugunler/${dolugun.RezervasyonId}`, dolugun),
    delete: (RezervasyonId: number) => request.del(`/DeleteVwdolugunler/${RezervasyonId}`),
    attend: (RezervasyonId: number) => request.post(`/UpdateVwdolugunler/${RezervasyonId}/attend`, {}),
    unattend: (RezervasyonId: string) => request.del(`/DeleteVwdolugunler/${RezervasyonId}/attend`)
};
const OccupancyCalendar= {
    list: (params: URLSearchParams): Promise<IOccupancyCalendarDATA> =>
        axios
            .get("GetAllDolulukTakvimis", { params: params })
            .then(response => response.data),
    details: (DolulukId: string) => request.get(`/GetVwdolugunlerById/${DolulukId}`),
    create: (dolutakvim: IOccupancyCalendarDATA) => axios.post("/UpdateVwdolugunler", dolutakvim, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (dolutakvim: IOccupancyCalendarDATA) => request.put(`/InsertVwdolugunler/${dolutakvim.DolulukId}`, dolutakvim),
    delete: (DolulukId: number) => request.del(`/DeleteVwdolugunler/${DolulukId}`),
    attend: (DolulukId: number) => request.post(`/UpdateVwdolugunler/${DolulukId}/attend`, {}),
    unattend: (DolulukId: string) => request.del(`/DeleteVwdolugunler/${DolulukId}/attend`)
};


//  ######  Price  ######## //
const ProductsPrice= {
    list: (params: URLSearchParams): Promise<IProductsPriceDATA> =>
        axios
            .get("GetAllUrunlerFiyats", { params: params })
            .then(response => response.data),
    details: (FiyatId: string) => request.get(`/GetUrunlerfiyatById/${FiyatId}`),
    create: (fiyaturunler: IProductsPriceDATA) => axios.post("/UpdateUrunlerFiyat", fiyaturunler, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (fiyaturunler: IProductsPriceDATA) => request.put(`/InsertUrunlerFiyat/${fiyaturunler.FiyatId}`, fiyaturunler),
    delete: (FiyatId: number) => request.del(`/DeleteUrunlerFiyat/${FiyatId}`),
    attend: (FiyatId: number) => request.post(`/UpdateUrunlerFiyat/${FiyatId}/attend`, {}),
    unattend: (FiyatId: string) => request.del(`/DeleteUrunlerFiyat/${FiyatId}/attend`)
};
const ProductsAdditionalPrice= {
    list: (params: URLSearchParams): Promise<IProductsAdditionalPriceDATA> =>
        axios
            .get("GetAllUrunlerEkFiyat", { params: params })
            .then(response => response.data),
    details: (UrunEkfiyatId: string) => request.get(`/GetUrunlerEkFiyatById/${UrunEkfiyatId}`),
    create: (urunlerEkFiyat: IProductsAdditionalPriceDATA) => axios.post("/UpdateUrunlerEkFiyat", urunlerEkFiyat, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (urunlerEkFiyat: IProductsAdditionalPriceDATA) => request.put(`/InsertUrunlerEkFiyat/${urunlerEkFiyat.UrunEkfiyatId}`, urunlerEkFiyat),
    delete: (UrunEkfiyatId: number) => request.del(`/DeleteUrunlerEkFiyat/${UrunEkfiyatId}`),
    attend: (UrunEkfiyatId: number) => request.post(`/UpdateUrunlerEkFiyat/${UrunEkfiyatId}/attend`, {}),
    unattend: (UrunEkfiyatId: string) => request.del(`/DeleteUrunlerEkFiyat/${UrunEkfiyatId}/attend`)
};
const Currencies= {
    list: (params: URLSearchParams): Promise<ICurrenciesDATA> =>
        axios
            .get("GetAllParaBirimlers", { params: params })
            .then(response => response.data),
    details: (BirimId: string) => request.get(`/GetParaBirimlerById/${BirimId}`),
    create: (parabirimleri: ICurrenciesDATA) => axios.post("/UpdateParaBirimler", parabirimleri, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (parabirimleri: ICurrenciesDATA) => request.put(`/InsertParaBirimler/${parabirimleri.BirimId}`, parabirimleri),
    delete: (BirimId: number) => request.del(`/DeleteParaBirimler/${BirimId}`),
    attend: (BirimId: number) => request.post(`/UpdateParaBirimler/${BirimId}/attend`, {}),
    unattend: (BirimId: string) => request.del(`/DeleteParaBirimler/${BirimId}/attend`)
};


//  ######  Campaigns  ######## //
const ProductsCampaigns= {
    list: (params: URLSearchParams): Promise<IProductsCampaignsDATA> =>
        axios
            .get("GetAllUrunlerKampanyalar", { params: params })
            .then(response => response.data),
    details: (UrunKampanyaId: string) => request.get(`/GetUrunlerKampanyalarById/${UrunKampanyaId}`),
    create: (urunkampanya: IProductsCampaignsDATA) => axios.post("/UpdateUrunlerKampanyalar", urunkampanya, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (urunkampanya: IProductsCampaignsDATA) => request.put(`/InsertUrunlerKampanyalar/${urunkampanya.UrunKampanyaId}`, urunkampanya),
    delete: (KampanyaId: number) => request.del(`/DeleteUrunlerKampanyalarById/${KampanyaId}`),
    attend: (KampanyaId: number) => request.post(`/UpdateUrunlerKampanyalar/${KampanyaId}/attend`, {}),
    unattend: (KampanyaId: string) => request.del(`/DeleteUrunlerKampanyalarById/${KampanyaId}/attend`)
};
const Campaigns= {
    list: (params: URLSearchParams): Promise<ICampaignsDATA> =>
        axios
            .get("GetAllKampanyalar", { params: params })
            .then(response => response.data),
    details: (KampanyaId: string) => request.get(`/GetKampanyalarById/${KampanyaId}`),
    create: (kampanya: ICampaignsDATA) => axios.post("/UpdateKampanyalar", kampanya, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (kampanya: ICampaignsDATA) => request.put(`/InsertKampanyalar/${kampanya.KampanyaId}`, kampanya),
    delete: (KampanyaId: number) => request.del(`/DeleteKampanyalarById/${KampanyaId}`),
    attend: (KampanyaId: number) => request.post(`/UpdateKampanyalar/${KampanyaId}/attend`, {}),
    unattend: (KampanyaId: string) => request.del(`/DeleteKampanyalarById/${KampanyaId}/attend`)
};
const VwCampaigns= {
    list: (params: URLSearchParams): Promise<IVwCampaignsDATA> =>
        axios
            .get("GetAllVwkampanyalar", { params: params })
            .then(response => response.data),
    details: (KampanyaId: string) => request.get(`/GetVwkampanyalarById/${KampanyaId}`),
    create: (vwkampanyalar: IVwCampaignsDATA) => axios.post("/UpdateVwkampanyalar", vwkampanyalar, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (vwkampanyalar: IVwCampaignsDATA) => request.put(`/InsertKampanyalar/${vwkampanyalar.KampanyaId}`, vwkampanyalar),
    delete: (KampanyaId: number) => request.del(`/DeleteVwkampanyalarById/${KampanyaId}`),
    attend: (KampanyaId: number) => request.post(`/UpdateVwkampanyalar/${KampanyaId}/attend`, {}),
    unattend: (KampanyaId: string) => request.del(`/DeleteVwkampanyalarById/${KampanyaId}/attend`)
};

//  ######  Reservation  ######## //
const RentalPictures = {
    list: (params: URLSearchParams): Promise<IRentalPicturesDATA> =>
        axios
            .get("/GetAllKiralamaResims", { params: params })
            .then(response => response.data),
    details: (TalepresimId: string) => request.get(`/GetKiralamaResimlerById/${TalepresimId}`),
    create: (kiralamaresim: IRentalPicturesDATA) => axios.post("/UpdateKiralamaResimler", kiralamaresim, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (kiralamaresim: IRentalPicturesDATA) => request.put(`/InsertKiralamaResimler/${kiralamaresim.TalepresimId}`, kiralamaresim),
    delete: (TalepresimId: number) => request.del(`/DeleteKiralamaResimlerById/${TalepresimId}`),
    attend: (TalepresimId: number) => request.post(`/UpdateKiralamaResimler/${TalepresimId}/attend`, {}),
    unattend: (TalepresimId: string) => request.del(`/DeleteKiralamaResimlerById/${TalepresimId}/attend`)
};
const ReservationsProduct = {
    list: (params: URLSearchParams): Promise<IReservationsProductDATA> =>
        axios
            .get("/GetAllRezervasyonlarUrun", { params: params })
            .then(response => response.data),
    details: (RezervasyonurunId: string) => request.get(`/GetRezervasyonlarUrunById/${RezervasyonurunId}`),
    create: (rezervasyonlarUrun: IReservationsProductDATA) => axios.post("/UpdateRezervasyonUrun", rezervasyonlarUrun, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (rezervasyonlarUrun: IReservationsProductDATA) => request.put(`/InsertRezervasyonlarUrun/${rezervasyonlarUrun.RezervasyonurunId}`, rezervasyonlarUrun),
    delete: (RezervasyonurunId: number) => request.del(`/DeleteRezervasyonUrun/${RezervasyonurunId}`),
    attend: (RezervasyonurunId: number) => request.post(`/UpdateRezervasyonUrun/${RezervasyonurunId}/attend`, {}),
    unattend: (RezervasyonurunId: string) => request.del(`/DeleteRezervasyonUrun/${RezervasyonurunId}/attend`)
};
const RentalRequests = {
    list: (params: URLSearchParams): Promise<IRentalRequestsDATA> =>
        axios
            .get("/GetAllKiralamaTalepleri", { params: params })
            .then(response => response.data),
    details: (TalepId: string) => request.get(`/GetKiralamaTalepleriById/${TalepId}`),
    create: (kiralamaTalepleri: IRentalRequestsDATA) => axios.post("/UpdateKiralamaTalepleri", kiralamaTalepleri, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (kiralamaTalepleri: IRentalRequestsDATA) => request.put(`/InsertKiralamaTalepleri/${kiralamaTalepleri.TalepId}`, kiralamaTalepleri),
    delete: (TalepId: number) => request.del(`/DeleteKiralamaTalepleri/${TalepId}`),
    attend: (TalepId: number) => request.post(`/UpdateKiralamaTalepleri/${TalepId}/attend`, {}),
    unattend: (TalepId: string) => request.del(`/DeleteKiralamaTalepleri/${TalepId}/attend`)
};
const PreReservations = {
    list: (params: URLSearchParams): Promise<IPreReservationsDATA> =>
        axios
            .get("/GetAllOnrezervasyonlar", { params: params })
            .then(response => response.data),
    details: (OnrezervasyonId: string) => request.get(`/GetOnrezervasyonlarById/${OnrezervasyonId}`),
    create: (onrezervasyonlar: IPreReservationsDATA) => axios.post("/UpdateOnrezervasyonlar", onrezervasyonlar, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (onrezervasyonlar: IPreReservationsDATA) => request.put(`/InsertOnrezervasyonlar/${onrezervasyonlar.OnrezervasyonId}`, onrezervasyonlar),
    delete: (OnrezervasyonId: number) => request.del(`/DeleteOnrezervasyonlar/${OnrezervasyonId}`),
    attend: (OnrezervasyonId: number) => request.post(`/UpdateOnrezervasyonlar/${OnrezervasyonId}/attend`, {}),
    unattend: (OnrezervasyonId: string) => request.del(`/DeleteOnrezervasyonlar/${OnrezervasyonId}/attend`)
};
const PreReservationsProduct = {
    list: (params: URLSearchParams): Promise<IPreReservationsProductDATA> =>
        axios
            .get("/GetAllOnrezervasyonlarUrun", { params: params })
            .then(response => response.data),
    details: (OnrezervasyonlarUrunId: string) => request.get(`/GetOnrezervasyonlarUrunById/${OnrezervasyonlarUrunId}`),
    create: (onrezervasyonlarUrun: IPreReservationsProductDATA) => axios.post("/UpdateOnrezervasyonlarUrun", onrezervasyonlarUrun, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (onrezervasyonlarUrun: IPreReservationsProductDATA) => request.put(`/InsertOnrezervasyonlarUrun/${onrezervasyonlarUrun.OnrezervasyonId}`, onrezervasyonlarUrun),
    delete: (OnrezervasyonlarUrunId: number) => request.del(`/DeleteOnrezervasyonlarUrun/${OnrezervasyonlarUrunId}`),
    attend: (OnrezervasyonlarUrunId: number) => request.post(`/UpdateOnrezervasyonlarUrun/${OnrezervasyonlarUrunId}/attend`, {}),
    unattend: (OnrezervasyonlarUrunId: string) => request.del(`/DeleteOnrezervasyonlarUrun/${OnrezervasyonlarUrunId}/attend`)
};
const PreReservationsAdditionalService = {
    list: (params: URLSearchParams): Promise<IPreReservationsAdditionalServiceDATA> =>
        axios
            .get("/GetAllOnrezervasyonlarEkhizmet", { params: params })
            .then(response => response.data),
    details: (OnrezervasyonekhizmetId: string) => request.get(`/GetOnrezervasyonlarEkhizmetById/${OnrezervasyonekhizmetId}`),
    create: (onrezervasyonlarEkhizmet: IPreReservationsAdditionalServiceDATA) => axios.post("/UpdateOnrezervasyonlarEkhizmet", onrezervasyonlarEkhizmet, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (onrezervasyonlarEkhizmet: IPreReservationsAdditionalServiceDATA) => request.put(`/InsertOnrezervasyonlarEkhizmet/${onrezervasyonlarEkhizmet.OnrezervasyonekhizmetId}`, onrezervasyonlarEkhizmet),
    delete: (OnrezervasyonekhizmetId: number) => request.del(`/DeleteOnrezervasyonlarEkhizmet/${OnrezervasyonekhizmetId}`),
    attend: (OnrezervasyonekhizmetId: number) => request.post(`/UpdateOnrezervasyonlarEkhizmet/${OnrezervasyonekhizmetId}/attend`, {}),
    unattend: (OnrezervasyonekhizmetId: string) => request.del(`/DeleteOnrezervasyonlarEkhizmet/${OnrezervasyonekhizmetId}/attend`)
};

//  ###### VariablesGroup ######## //
const VariablesGroup = {
    list: (params: URLSearchParams): Promise<IVariablesGroupDATA> =>
        axios
            .get("/GetAllDegiskengruplar", { params: params })
            .then(response => response.data),
    details: (DegiskengrupId: string) => request.get(`/GetDegiskengruplarById/${DegiskengrupId}`),
    create: (degiskengruplar: IVariablesGroupDATA) => axios.post("/UpdateDegiskengruplar", degiskengruplar, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (degiskengruplar: IVariablesGroupDATA) => request.put(`/InsertDegiskengruplar/${degiskengruplar.DegiskengrupId}`, degiskengruplar),
    delete: (DegiskengrupId: number) => request.del(`/DeleteDegiskengruplar/${DegiskengrupId}`),
    attend: (DegiskengrupId: number) => request.post(`/UpdateDegiskengruplar/${DegiskengrupId}/attend`, {}),
    unattend: (DegiskengrupId: string) => request.del(`/DeleteDegiskengruplar/${DegiskengrupId}/attend`)
};
const VariablesGroupLanguage = {
    list: (params: URLSearchParams): Promise<IVariablesGroupLanguageDATA> =>
        axios
            .get("/GetAllDegiskengruplarDil", { params: params })
            .then(response => response.data),
    details: (DegiskengrupDilId: string) => request.get(`/GetDegiskengruplarDilById/${DegiskengrupDilId}`),
    create: (degiskengruplarDil: IVariablesGroupLanguageDATA) => axios.post("/UpdateDegiskengruplarDil", degiskengruplarDil, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (degiskengruplarDil: IVariablesGroupLanguageDATA) => request.put(`/InsertDegiskengruplarDil/${degiskengruplarDil.DegiskengrupDilId}`, degiskengruplarDil),
    delete: (DegiskengrupDilId: number) => request.del(`/DeleteDegiskengruplarDil/${DegiskengrupDilId}`),
    attend: (DegiskengrupDilId: number) => request.post(`/UpdateDegiskengruplarDil/${DegiskengrupDilId}/attend`, {}),
    unattend: (DegiskengrupDilId: string) => request.del(`/DeleteDegiskengruplarDil/${DegiskengrupDilId}/attend`)
};
const VariablesLanguage = {
    list: (params: URLSearchParams): Promise<IVariablesLanguageDATA> =>
        axios
            .get("/GetAllDegiskenlerDil", { params: params })
            .then(response => response.data),
    details: (DegiskenlerDilId: string) => request.get(`/GetDegiskenlerDilById/${DegiskenlerDilId}`),
    create: (degiskenlerDil: IVariablesLanguageDATA) => axios.post("/UpdateDegiskenlerDil", degiskenlerDil, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (degiskenlerDil: IVariablesLanguageDATA) => request.put(`/InsertDegiskenlerDil/${degiskenlerDil.DegiskenDilId}`, degiskenlerDil),
    delete: (DegiskenlerDilId: number) => request.del(`/DeleteDegiskenlerDil/${DegiskenlerDilId}`),
    attend: (DegiskenlerDilId: number) => request.post(`/UpdateDegiskenlerDil/${DegiskenlerDilId}/attend`, {}),
    unattend: (DegiskenlerDilId: string) => request.del(`/DeleteDegiskenlerDil/${DegiskenlerDilId}/attend`)
};
const Variables = {
    list: (params: URLSearchParams): Promise<IVariablesDATA> =>
        axios
            .get("/GetAllDegiskenler", { params: params })
            .then(response => response.data),
    details: (DegiskenlerId: string) => request.get(`/GetDegiskenlerById/${DegiskenlerId}`),
    create: (degiskenler: IVariablesDATA) => axios.post("/UpdateDegiskenler", degiskenler, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (degiskenler: IVariablesDATA) => request.put(`/InsertDegiskenler/${degiskenler.DegiskengrupId}`, degiskenler),
    delete: (DegiskenlerId: number) => request.del(`/DeleteDegiskenler/${DegiskenlerId}`),
    attend: (DegiskenlerId: number) => request.post(`/UpdateDegiskenler/${DegiskenlerId}/attend`, {}),
    unattend: (DegiskenlerId: string) => request.del(`/DeleteDegiskenler/${DegiskenlerId}/attend`)
};
const ProductsVariables = {
    list: (params: URLSearchParams): Promise<IProductsVariablesDATA> =>
        axios
            .get("/GetAllUrunlerDegiskenler", { params: params })
            .then(response => response.data),
    details: (UrunDegiskenId: string) => request.get(`/GetUrunlerDegiskenlerById/${UrunDegiskenId}`),
    create: (urunlerDegiskenler: IProductsVariablesDATA) => axios.post("/UpdateUrunlerDegiskenler", urunlerDegiskenler, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (urunlerDegiskenler: IProductsVariablesDATA) => request.put(`/InsertUrunlerDegiskenler/${urunlerDegiskenler.UrunDegiskenId}`, urunlerDegiskenler),
    delete: (UrunDegiskenId: number) => request.del(`/DeleteUrunlerDegiskenler/${UrunDegiskenId}`),
    attend: (UrunDegiskenId: number) => request.post(`/UpdateUrunlerDegiskenler/${UrunDegiskenId}/attend`, {}),
    unattend: (UrunDegiskenId: string) => request.del(`/DeleteUrunlerDegiskenler/${UrunDegiskenId}/attend`)
};

const ProductsContract = {
    list: (params: URLSearchParams): Promise<IProductsContractDATA> =>
        axios
            .get("/GetAllUrunlerKontrat", { params: params })
            .then(response => response.data),
    details: (KontratId: string) => request.get(`/GetUrunlerKontratById/${KontratId}`),
    create: (urunlerKontrat: IProductsContractDATA) => axios.post("/UpdateUrunlerKontrat", urunlerKontrat, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (urunlerKontrat: IProductsContractDATA) => request.put(`/InsertUrunlerKontrat/${urunlerKontrat.KontratId}`, urunlerKontrat),
    delete: (KontratId: number) => request.del(`/DeleteUrunlerKontratById/${KontratId}`),
    attend: (KontratId: number) => request.post(`/UpdateUrunlerKontrat/${KontratId}/attend`, {}),
    unattend: (KontratId: string) => request.del(`/DeleteUrunlerKontratById/${KontratId}/attend`)
};
const Pages = {
    list: (params: URLSearchParams): Promise<IPagesDATA> =>
        axios
            .get("/GetAllSayfalar", { params: params })
            .then(response => response.data),
    details: (SayfaId: string) => request.get(`/GetSayfalarById/${SayfaId}`),
    create: (sayfalar: IPagesDATA) => axios.post("/UpdateSayfalar", sayfalar, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (sayfalar: IPagesDATA) => request.put(`/InsertSayfalar/${sayfalar.sayfaId}`, sayfalar),
    delete: (SayfaId: number) => request.del(`/DeleteSayfalar/${SayfaId}`),
    attend: (SayfaId: number) => request.post(`/UpdateSayfalar/${SayfaId}/attend`, {}),
    unattend: (SayfaId: string) => request.del(`/DeleteSayfalar/${SayfaId}/attend`)
};
const faqQuestions = {
    list: (params: URLSearchParams): Promise<IfaqQuestionsDATA> =>
        axios
            .get("/GetAllSssSorular", { params: params })
            .then(response => response.data),
    details: (SoruId: string) => request.get(`/GetSssSorularById/${SoruId}`),
    create: (sssSorular: IfaqQuestionsDATA) => axios.post("/UpdateSssSorular", sssSorular, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}}),
    update: (sssSorular: IfaqQuestionsDATA) => request.put(`/InsertSssSorular/${sssSorular.soruId}`, sssSorular),
    delete: (SoruId: number) => request.del(`/DeleteSssSorular/${SoruId}`),
    attend: (SoruId: number) => request.post(`/UpdateSssSorular/${SoruId}/attend`, {}),
    unattend: (SoruId: string) => request.del(`/DeleteSssSorular/${SoruId}/attend`)
};


export {Products,
    ShowcaseProducts,
    ProductsBaths,
    ProductsBedrooms,
    ProductsComments,
    ProductsPicture,
    ProductsCategories,
    ProductsPromotions,
    ProductsFeatures,
    Features,
    FeatureGroups,
    FeatureGroupLanguages,
    FeatureLanguages,
    Country,
    District,
    Provinces,
    Districts,
    Languages,
    ProductsLanguages,
    FullDays,
    OccupancyCalendar,
    ProductsPrice,
    ProductsAdditionalPrice,
    Currencies,
    ProductsCampaigns,
    Campaigns,
    VwCampaigns,
    RentalPictures,
    ReservationsProduct,
    RentalRequests,
    PreReservations,
    PreReservationsProduct,
    PreReservationsAdditionalService,
    Variables,
    VariablesGroup,
    VariablesGroupLanguage,
    VariablesLanguage,
    ProductsVariables,
    ProductsContract,
    Pages,
    faqQuestions,
};

export class ProductDataService {
}