using Microsoft.AspNet.SignalR;

namespace AspNetMvcSignalRDemo.Hubs
{
    public class ChatHub : Hub
    {
        public void Send(string name, string message)
        {
            Clients.All.addMessage(name, message);
        }
    }
}