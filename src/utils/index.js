export default {
    formDate(timestamp){
        function fixedZero(num) {
            return num>=10 ? ''+num : '0'+num;
        }


        let date = new Date(timestamp);
        let year = date.getFullYear();
        let month = fixedZero(date.getMonth() + 1);
        let day = fixedZero(date.getDate());
        let hour = fixedZero(date.getHours());
        let min = fixedZero(date.getMinutes());
        let seconds = fixedZero(date.getSeconds());
        let newDate = `${year}-${month}-${day} ${hour}:${min}:${seconds}`;
        return newDate;
    }
}