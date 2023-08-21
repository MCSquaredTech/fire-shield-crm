

const mockApiKey = process.env.REACT_APP_MOCKAPI_KEY;

class CompanyDataProvider { 

    getCompany = async () => { 
        try{ 
            const resp = await fetch(`${mockApiKey}/Company`);
            return await resp.json(); 
        } catch (e) { 
            console.log('The Fetch Company Request Failed', e);
        }
    }

    getCompanyById = async (Company) => { 
        try { 
            const resp = await fetch(`${mockApiKey}/Company/${Company.id}`);
            return await resp.json();
        } catch (e) { 
            console.log('The Fetch Company by Id Request Failed', e);
        }
    }

    postCompany = async (Company) => {
        try { 
            const resp = await fetch(`${mockApiKey}/Company`,
            {
                method: "POST",
                header: { 
                    "content-type": "application/json"
                },
                body: JSON.stringify(Company)
            });
            return await resp.json();
        } catch (e) { 
            console.log('The Post Company Request Failed', e);
        }
    }

    putCompany = async (Company) => { 
        try { 
            const resp = await fetch(`$(mockApiKey)/Company/${Company.id}`,
            {
                method: "PUT",
                header: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(Company)
            });
            return await resp.json();
        } catch (e) { 
            console.log('The Put Company Request Failed', e);

        }
    }

    deleteCompany = async (Company) => { 
        try { 
            const resp = await fetch(`${mockApiKey}\${Company.id}`,
            { 
                method: "Delete"
            });
        } catch (e) { 
            console.log('The Delete Company Request Failed', e);
        }
    }
}

export const CompanyDataSourceAPI = new CompanyDataProvider(); 