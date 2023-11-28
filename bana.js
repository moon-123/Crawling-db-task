fetch('http://localhost:8080/bana/')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        const main = document.getElementById('main');
        let html = ''
        html += '<ul class="list-box">'
        data.forEach((bana) => {
            html += `
            <li>
                <div id="bana-box">
                    <div id="img"><img src="./bana_img/${bana.filename}" alt="${bana.name}" width="200px">
                    </div>
                    <div id="text">
                        <div id="name">지점명: ${bana.name}
                        </div>
                        <div id="address">주소: ${bana.address}
                        </div>
                    </div>
                </div>
            </li>
            `

            
        })
        html += '</ul>'
 
        main.innerHTML = html
        const bana_box = document.querySelectorAll('#bana-box')
        const img = document.querySelector('img')
        const img_box = document.getElementById('img')
        const text = document.querySelectorAll('#text')
        const name = document.querySelectorAll('#name')

        bana_box.forEach((bana) => {
            bana.style.display = "flex"
            bana.style.border = "1px solid black"
            bana.style.margin = "10px auto"
        });

        text.forEach((te) => {
            te.style.marginLeft = "20px"
            te.style.display = "flex"
            te.style.flexDirection = "column"
        }) 
        
        name.forEach((na) => {
            na.style.margin = "20px 0px"
        })
 
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(37.147540644311405, 127.74825459572111 ), // 지도의 중심좌표
            level: 12 // 지도의 확대 레벨
        };
        var map = new kakao.maps.Map(mapContainer, mapOption);

        data.forEach((bana) => {
            var geocoder = new kakao.maps.services.Geocoder();
            geocoder.addressSearch(bana.address, function (result, status) {
    
                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {
    
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });
    
                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: bana.address
                    });
                }
            });
        })

    })