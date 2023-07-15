<template>
    <img style="height: 3%;width:  3%;" src="../../assets/SearchCircle.svg" />
    <input placeholder="请输入要搜索的音乐" />
</template>
<style scoped>

img {
    height: 25px;
    width: 30px;
    padding-left: 5px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    color: white;
    position: relative;
    left: 130px;
    top: 11px;
}

img:hover {
    box-shadow: 3px 3px 1px black;
}

input {
    width: 150px;
    height: 20px;
    padding-left: 30px;
    margin-left: 100px;
    border-radius: 20px;
    transition: box-shadow 1s;
    transition: width 1s;
}



input:hover {
    box-shadow: 1px 1px 8px orange;
    width: 250px;
}

input:focus {
    transition: background-color 1s ;
    background-color: rgba(255, 166, 0, 0.204);
    transition: width 1s;
    width: 250px;
}

</style>