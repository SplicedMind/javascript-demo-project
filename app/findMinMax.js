module.exports = {
 
 findMinMax: function(arr) {
   var minMax = [];
   if (arr instanceof Array) 
      {
         var min = arr[0];
         var max = arr[0];
         var iterator = 0;
         while(iterator < arr.length - 1)
         {
            if(min > arr[iterator])
            {
               min = arr[iterator];
            }
            if (max < arr[iterator])
            {
               max = arr[iterator];
            }  

            iterator += 1;          
         }
         
      }
   return minMax;
 }
  
}