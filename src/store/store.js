import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // BESLEME
    solid: '',
    water: '',
    solidDensity: '',
    solidFR: '',
    totalFR: '',
    moist: '',
    waterMoist: '',
    besleme_f: '',
    besleme_f_ustu: '',

    // UST ELEK
    elekust_solid:'',
    elekust_moist:'',
    elekust_water_moist:'',
    elekust_o:'',
    elekust_o_ustu:'',

    elekust_underScreen_solid:'',
    elekust_underScreen_SR:'',
    elekust_underScreen_Water_SR:'',
    elekust_underScreen_U:'',
    elekust_underScreen_UUstu:'',
    // ALT ELEK
    elekcikis_solid:'',
    elekcikis_SR:'',
    elekcikis_waterSR:'',
    elekcikis_u:'',
    elekcikis_u_ust:'',

    // ALT ELEK
    eleksagalt_solid:'',
    eleksagalt_Moist:'',
    eleksagalt_water_moist:'',
    eleksagalt_o:'',
    eleksagalt_o_ustu:'',

    slimeTank_SR:'',
    slimeTank_SRmax:'',
    slimeTank_requiredWater:'',
    slimeTank_WaterAddition:'',

    hydrocyclone_feed_f_ustu:'',
    
    hydrocyclone_of_solid:'',
    hydrocyclone_of_water:'',
    hydrocyclone_of_SR:'',
    hydrocyclone_of_f_ustu:'',

    hydrocyclone_uf_solid:'',
    hydrocyclone_uf_water:'',
    hydrocyclone_uf_SR:'',
    hydrocyclone_uf_f_ustu:'',

    cyclone_eff_solid_den:'',
    cyclone_eff_flow_rate:'',
    cyclone_eff_inlet_pres_kpa:'',
    cyclone_eff_inlet_pres_psig:'',
    cyclone_eff_inlet_pres_bar:'',
    cyclone_eff_d50c_cut_size:'',
    cyclone_eff_multiplier:'',
    cyclone_eff_d50c_cut_size_app:'',
    cyclone_eff_d50c_base:'',
    cyclone_eff_vol_flow:'',
    cyclone_eff_inlet_pres_cor:'',
    cyclone_eff_density_cor:'',
    cyclone_eff_dc_cm_required:'',
    cyclone_eff_dc_inc_required:'',
    cyclone_eff_total_flow_m3:'',
    cyclone_eff_total_rate_gal:'',
    cyclone_base_capa:'',
    cyclone_number_of:'',

    slimeTank2_SR:'',
    slimeTank2_SRmax:'',
    slimeTank2_RequiredWater:'',
    slimeTank2_W3:'',

    coal_feed_ash:'',

    coal_clean_solid:'',
    coal_clean_ccAsh:'',
    coal_clean_waterProduct:'',
    coal_clean_moist:'',

    coal_tailing_ccAsh:'',
    coal_tailing_moist:'',
    coal_tailing_water:'',
    coal_tailing_solid:''

  },

  mutations: {
    setX(state, payload) {
      state[payload.x] = payload.value;
    },
    changeSolid(state, solid) {
      state.solid = solid
    },
    changeWater(state, water) {
      state.water = water
    },
    changeSolidDensity(state, solidDensity) {
      state.solidDensity = solidDensity
    },
    changeSolidFR(state, solidFR) {
      state.solidFR = solidFR
    },
    changeTotalFR(state, totalFR) {
      state.totalFR = totalFR
    },
    changeMoist(state, moist) {
      state.moist = moist
    },
    changewaterMoist(state, waterMoist) {
      state.waterMoist = waterMoist
    },
    changeBesleme_f(state, besleme_f) {
      state.besleme_f = besleme_f
    },
    changeBesleme_f_ustu(state, besleme_f_ustu) {
      state.besleme_f_ustu = besleme_f_ustu
    }
  },
  getters: {
    // Besleme
    solid: state => state.solid,
    water: state => state.water,
    solidDensity: state => state.solidDensity,
    solidFR: state => state.solidFR,
    totalFR: state => state.totalFR,
    moist: state => state.moist,
    waterMoist: state => state.waterMoist,
    besleme_f: state => state.besleme_f,
    besleme_f_ustu: state => state.besleme_f_ustu,
    // Elek Ust
    elekust_solid: state => state.elekust_solid,
    elekust_moist: state => state.elekust_moist,
    elekust_water_moist: state => state.elekust_water_moist,
    elekust_o: state => state.elekust_o,
    elekust_o_ustu: state => state.elekust_o_ustu,

    elekust_underScreen_solid: state => state.elekust_underScreen_solid,
    elekust_underScreen_SR: state => state.elekust_underScreen_SR,
    elekust_underScreen_Water_SR: state => state.elekust_underScreen_Water_SR,
    elekust_underScreen_U: state => state.elekust_underScreen_U,
    elekust_underScreen_UUstu: state => state.elekust_underScreen_UUstu,

    // Elek alt
    eleksagalt_solid: state => state.eleksagalt_solid,
    eleksagalt_Moist: state => state.eleksagalt_Moist,
    eleksagalt_water_moist: state => state.eleksagalt_water_moist,
    eleksagalt_o: state => state.eleksagalt_o,
    eleksagalt_o_ustu: state => state.eleksagalt_o_ustu,

    // ELEK ÇIKIŞ
    elekcikis_solid: state => state.elekcikis_solid,
    elekcikis_SR: state => state.elekcikis_SR,
    elekcikis_waterSR: state => state.elekcikis_waterSR,
    elekcikis_u: state => state.elekcikis_u,
    elekcikis_u_ust: state => state.elekcikis_u_ust,


    slimeTank_SR: state => state.slimeTank_SR,
    slimeTank_requiredWater: state => state.slimeTank_requiredWater,
    slimeTank_WaterAddition: state => state.slimeTank_WaterAddition,
    slimeTank_SRmax: state => state.slimeTank_SRmax,

    hydrocyclone_feed_f_ustu: state => state.hydrocyclone_feed_f_ustu,

    hydrocyclone_of_solid: state => state.hydrocyclone_of_solid,
    hydrocyclone_of_water: state => state.hydrocyclone_of_water,
    hydrocyclone_of_SR: state => state.hydrocyclone_of_SR,
    hydrocyclone_of_f_ustu: state => state.hydrocyclone_of_f_ustu,

    hydrocyclone_uf_solid: state => state.hydrocyclone_uf_solid,
    hydrocyclone_uf_water: state => state.hydrocyclone_uf_water,
    hydrocyclone_uf_SR: state => state.hydrocyclone_uf_SR,
    hydrocyclone_uf_f_ustu: state => state.hydrocyclone_uf_f_ustu,

    //Cyclone Efficiency
    cyclone_eff_solid_den: state =>  state.cyclone_eff_solid_den,
    cyclone_eff_flow_rate: state => state.cyclone_eff_flow_rate,
    cyclone_eff_inlet_pres_kpa: state => state.cyclone_eff_inlet_pres_kpa,
    cyclone_eff_inlet_pres_psig: state => state.cyclone_eff_inlet_pres_psig,
    cyclone_eff_inlet_pres_bar: state => state.cyclone_eff_inlet_pres_bar,
    cyclone_eff_d50c_cut_size: state => state.cyclone_eff_d50c_cut_size,
    cyclone_eff_multiplier: state => state.cyclone_eff_multiplier,
    cyclone_eff_d50c_cut_size_app: state => state.cyclone_eff_d50c_cut_size_app,
    cyclone_eff_d50c_base: state => state.cyclone_eff_d50c_base,
    cyclone_eff_vol_flow: state => state.cyclone_eff_vol_flow,
    cyclone_eff_inlet_pres_cor: state => state.cyclone_eff_inlet_pres_cor,
    cyclone_eff_density_cor: state => state.cyclone_eff_density_cor,
    cyclone_eff_dc_cm_required: state => state.cyclone_eff_dc_cm_required,
    cyclone_eff_dc_inc_required: state => state.cyclone_eff_dc_inc_required,
    cyclone_eff_total_flow_m3: state => state.cyclone_eff_total_flow_m3,
    cyclone_eff_total_rate_gal: state => state.cyclone_eff_total_rate_gal,
    cyclone_base_capa: state => state.cyclone_base_capa,
    cyclone_number_of: state => state.cyclone_number_of,

    slimeTank2_SR: state => state.slimeTank2_SR,
    slimeTank2_SRmax: state => state.slimeTank2_SRmax,
    slimeTank2_RequiredWater: state => state.slimeTank2_RequiredWater,
    slimeTank2_W3: state => state.slimeTank2_W3,

    coal_feed_ash: state => state.coal_feed_ash,

    coal_clean_solid: state => state.coal_clean_solid,
    coal_clean_ccAsh: state => state.coal_clean_ccAsh,
    coal_clean_waterProduct: state => state.coal_clean_waterProduct,
    coal_clean_moist: state => state.coal_clean_moist,

    coal_tailing_ccAsh: state => state.coal_tailing_ccAsh,
    coal_tailing_moist: state => state.coal_tailing_moist,
    coal_tailing_water: state => state.coal_tailing_water,
    coal_tailing_solid: state => state.coal_tailing_solid  
  }
})
