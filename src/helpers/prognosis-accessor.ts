//Requests the dashboard page to extract the guids required to make ajax requests
export function getDashboardPage(dashboardName: string, callback: (string) => void) {
    fetch(`https://127.0.0.1/Prognosis/Dashboard/Content/${dashboardName}`, {mode: 'no-cors'})
    .then(response => response.body)
    .then(rb => {
      const reader = rb.getReader();
    
      return new ReadableStream({
        start(controller) {
          // The following function handles each data chunk
          function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then( ({done, value}) => {
              // If there is no more data to read
              if (done) {
                controller.close();
                return;
              }
              // Get the data and send it to the browser via the controller
              controller.enqueue(value);
              push();
            })
          }
    
          push();
        }
      });
    })
    .then(stream => {
      // Respond with our stream
      return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
    })
    .then(result => {
      // Do things with result
      callback(result);
    });
}