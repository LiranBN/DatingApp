using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions{

        
        // this extension methode for the HttpRespone is to show the error massege for the globale error heandler and show it in all Origim 
        public static void AddApplicationError(this HttpResponse response,string message){
            response.Headers.Add("Application-Error",message);
            response.Headers.Add("Access-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin","*");
        }
    }
}