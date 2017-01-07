module.exports = {
 
 findMinMax: function(arr) {
   var minMax = [];
   if (arr instanceof Array) 
      {
         var min = arr[0];
         var max = arr[0];
         var iterator = 0;
         while(iterator < arr.length)
         {
            if(typeof(arr[iterator]) == 'number' )
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
            else
            {
               return 'invalid argument';
            }
            
         }
         if(min === max)
         {
            minMax[0] = min;
         }
         else
         {
            minMax[0] = min;
            minMax[1] = max;
         }
         return minMax;
      }
   else
      {
        return 'invalid argument';
      }
 }
  
}