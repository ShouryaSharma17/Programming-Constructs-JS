// Program to show Sum of three Integer adds to ZERO.
{
    console.log("Welcome to Finding Triplet Program")
    let arr = new Array(0, -1, 2, -3, 1);
    let size = arr.length;
    console.log("Sum of three integers adding to zero: ")
    findTriplet(arr , size);

    function findTriplet(arr, n) {
        let found = true; 
        for (let i=0; i<n-2; i++) 
        { 
            for (let j=i+1; j<n-1; j++) 
            { 
                for (let k=j+1; k<n; k++) 
                { 
                    if (arr[i]+arr[j]+arr[k] == 0) 
                    { 
                        console.log(arr[i] + " " + arr[j] + " " + arr[k]);
                        found = true; 
                    } 
                } 
            } 
        } 
        if (found == false) 
            console.log("There does not exist any triplets"); 
    }
}