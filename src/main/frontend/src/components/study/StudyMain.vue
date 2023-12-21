<script setup>
import { ref, onMounted } from 'vue';
import studyMainConfig from '../../config/studyMain.js';

let map = null;

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap();
  } else {
    const script = document.createElement('script');
    /* global kakao */
    script.onload = () => kakao.maps.load(initMap);
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${studyMainConfig.mapKey}`;
    document.head.appendChild(script);
  }
});

const initMap = () => {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 5,
  };
  // 지도 객체를 등록합니다.
  // 지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
  map = new kakao.maps.Map(container, options);
};
</script>

<template>
  <div>
    <h3>Study Main 화면입니다.</h3>

<!--근처스터디카페(지도 API)
  키워드로 장소 검색  https://apis.map.kakao.com/web/sample/keywordBasic/
  geolocation으로 마커 표시하기  https://apis.map.kakao.com/web/sample/geolocationMarker/-->
    <div id="map"></div>




    <!--모임 검색(지역별, 이름, 날짜)-->
<!--모임 목록 (더보기 버튼으로 목록페이지 들어가기)-->
<!--모임만들기 버튼(모임 만들기 페이지로 이동)-->

  </div>
</template>

<style scoped>
  #map {
    width:100%;
    height:350px;
  }
</style>