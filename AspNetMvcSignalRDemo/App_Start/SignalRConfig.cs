using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

[assembly: OwinStartup(typeof(AspNetMvcSignalRDemo.App_Start.SignalRConfig))]
namespace AspNetMvcSignalRDemo.App_Start
{
    public class SignalRConfig
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}