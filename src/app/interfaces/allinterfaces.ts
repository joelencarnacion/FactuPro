export interface ResponseI {
  message: string,
  statusCode: number,
  status: boolean,
  data: [],
  token?: string
}

export interface BranchesI {
  id?: number,
  name: string,
  email: string,
  phone: string,
  latitude: string,
  longitude: string,
  state: string,
  city: string,
  zipCode: string,
  address: string,
  status: boolean,
}

export interface UserI {
  correo: string,
  contrasena: string
}
export interface RolI {
  idRol: string,
  nombre: string
}

export interface RegimenI {
  idRegimen: string,
  nombre: string
}

export interface SectorI {
  idSector: string,
  nombre: string
}

export interface NumEmpleadosI{
  valor: string,
  nombre:string
}

export interface SucursalI {
  idSucursal: number,
  idEmpresa: number,
  nombre: string,
  direccion: string,
  telefono1: string,
  telefono2: string,
};

export interface EmpresaI {
  idEmpresa: number,
  razonSocial: string,
  nombreComercial: string,
  rnc: string,
  correo: string,
  web: string,
  idRegimen: number,
  idSector: number,
  facturacionElectronica?: string,
  cantEmpleados: string,
  logo: string,
  sucursalPrincipal: SucursalI

};

export interface UsuarioActualI {
  idUsuario: number;
  nombre: string;
  apellidos: string;
  correo: string;
  Rol: RolI;
  sucursal:  SucursalI;
  estado: boolean;
}

export interface ImpuestoI{
  descripcion: string,
  idCuentaContableParaCompra: number
  idCuentaContableParaVenta: number
  idImpuesto: number
  impuestoAcreditable:   boolean
  nombre : string
  porcentaje:number
}

export interface CategoriaI{
  idCategoria: number,
  nombre: string
}

export interface MarcaI{
  idMarca: number,
  nombre: string,
  categoria: CategoriaI,
  idCategoria: number
}



export interface MesaI{
  id:number,
  name:string,
  size:number,
  status:boolean,
  qrCode:string,
}

export interface ProductosI{
      id: number,
      productCategoryId: number,
      taxId: number,
      name: string,
      caution: string,
      image: string,
      description: string,
      price: number,
      status: true,
      productType: number,
      isFeatured: number
}

export interface MonedaI{
  idMoneda: number,
  nombre: string,
  abreviatura: string,
  simbolo: string
}

