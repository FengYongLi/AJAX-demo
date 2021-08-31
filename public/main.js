let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n+1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response)
        array.forEach((item) => {
          const li = document.createElement('li')
          li.textContent = item.id
          xxx.appendChild(li)
        })
        n += 1
      }
    }
  }
  request.send();
}

getJson.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/1.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response)
        myName.textContent = object.name
        console.log(request.response)
        console.log(object)
      }
    }
  }
  request.send();
}

getXml.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/1.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
        console.log('加载 1.xml 成功')
      }
    }
  }
  request.send();
}
getHtml.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.html')
  request.onreadystatechange = () => {
    console.log(request.readyState)
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement('div')
        div.innerHTML = request.response
        console.log(request.response)
        document.body.appendChild(div)
        console.log('加载 2.html 成功')
      }
    }
  }
  request.send();
}

getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css')
  request.onreadystatechange = () => {
    console.log(request.readyState)
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {

        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
        console.log('加载 css 成功')
      } else {
        alert('加载 css 失败')
      }
    }
  }
  request.send()
}

getScript.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onreadystatechange = () => {
    console.log(request.readyState)
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
      } else {
        alert('加载 2.js 失败')
      }
    }
  }
  request.send()
}