$images = @{
    'iron-man'        = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/346-iron-man.jpg'
    'spider-man'      = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/620-spider-man.jpg'
    'thor'            = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/659-thor.jpg'
    'captain-america' = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/149-captain-america.jpg'
    'doctor-strange'  = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/226-doctor-strange.jpg'
    'scarlet-witch'   = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/579-scarlet-witch.jpg'
    'wolverine'       = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/717-wolverine.jpg'
    'thanos'          = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/655-thanos.jpg'
    'black-panther'   = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/106-black-panther.jpg'
    'loki'            = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/414-loki.jpg'
    'deadpool'        = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/213-deadpool.jpg'
    'storm'           = 'https://raw.githubusercontent.com/akabab/superhero-api/master/api/images/lg/638-storm.jpg'
}

foreach ($key in $images.Keys) {
    $url = $images[$key]
    $outPath = "c:\Users\USER\Desktop\MARVEL\images\$key.jpg"
    Write-Host "Downloading $key from $url..."
    Invoke-WebRequest -Uri $url -OutFile $outPath
}

Write-Host "All downloads complete!"
