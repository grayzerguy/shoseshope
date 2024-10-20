//development + production configuration
class Config {


}

//development configuration
class DeveloperConfig extends Config {

    public employeesUrl = "http://localhost:3030/api/employees/"
    public productsUrl = "https://api.escuelajs.co/api/v1/products"
    public productsUrlNew = "https://fake-store-api.mock.beeceptor.com/api/products"

}
//production configuration
class ProductionConfig extends Config {

    public employeesUrl = "www://northwind/api/employees/"
    public productsUrl = "http://localhost:3030/api/products/"
    public productsUrlNew = "https://fake-store-api.mock.beeceptor.com/api/products"

}

const config = process.env.NODE_ENV === "development" ? new DeveloperConfig() : new ProductionConfig();

export default config