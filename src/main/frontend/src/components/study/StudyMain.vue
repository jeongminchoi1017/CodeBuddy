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
    console.log("appkey: " + studyMainConfig.mapKey);
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
  <div class="studyMain">
    <b-container class="bv-example-row" fluid="xl">
      <div class="overflow-auto layout">
        <h4>Study Cafe</h4>
        <!--근처스터디카페(지도 API)
          키워드로 장소 검색  https://apis.map.kakao.com/web/sample/keywordBasic/
          geolocation으로 마커 표시하기  https://apis.map.kakao.com/web/sample/geolocationMarker/-->
        <div id="map"></div>
      </div>
      <div class="overflow-auto layout">
        <h4>Join List</h4>
        <form class="d-flex float">
          <!--모임 검색(지역별, 이름, 날짜)-->
          <select>
            <option value="location">지역별</option>
            <option value="studyName">모임명</option>
            <option value="studyDate">날짜</option>
          </select>
          <input class="form-control me-2 SearchTxt" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success SearchBtn" type="submit">Search</button>
        </form>
        <!--모임 목록 (더보기 버튼으로 목록페이지 들어가기)-->
        <b-list-group>
          <b-list-group-item href="#" active class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List Group item heading</h5>
              <small>3 days ago</small>
            </div>

            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small>Donec id elit non mi porta.</small>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List Group item heading</h5>
              <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>

          <b-list-group-item href="#" disabled class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Disabled List Group item</h5>
              <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="overflow-auto layout">
        <!--모임 만들기 버튼-->
        <b-button block variant="primary">스터디 모집</b-button>
      </div>
    </b-container>
  </div>

</template>

<style scoped>
  #map {
    width:100%;
    height:350px;
  }
  h4 {
    font-family: Impact;
  }
  .layout {border : 1px solid blue}
  .btn {
    border: #ffb733;
    background-color: #ffb733;
    color: black;
  }
</style>