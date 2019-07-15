class TwoSum {
    public main(nums:number[],target:number,i=0,maps={}):any{
        const map = maps
        if(map[target - nums[i] ] >= 0 ) {
            return [ map[target - nums[i] ], i]
        } else {
            map[ nums[i] ] = i;
            i++;
            if(i < nums.length - 1){
                return this.main(nums, target, i, map)
            }else {
                throw new Error('error: twoSum is not find')
            }
        }
    }

    public twosum3(nums:number[],target:number):any{
        const map = {}
        for (let i = 0; i < nums.length; i++){
            if(map[target - nums[i] ] >= 0){
                return [ map[target - nums[i] ], i]
            }
            map[nums[i]] = i;
        }
    }

    public twoSum2 (nums:number[], target:number):any {
        let map = new Map();
        let arr = new Array()
        for(let i in nums){
            map.set(
                nums[i],
                i
            )
        }

        for(let j = 0; j < nums.length - 1; j++){
            if(map.has( target - nums[j] ) && map.get( target - nums[j]) != j ){
                arr.push( j , map.get( target - nums[j] ) );
                return arr
            }
        }

    }


}
export default TwoSum