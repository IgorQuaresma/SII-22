library(tidyverse)
library(osmdata)
library(sf)
library(ggmap)
library(rgdal)

#read districts shapefile
districts <- st_read("Stadtbezirke_EPSG25832_SHAPE.shp")

#create bbox
bbox <- st_bbox(districts)

#create bbox using opq osm function
osm_bbox <- opq(bbox)

#initialize api
new_url <- "https://overpass.openstreetmap.ie/api/interpreter"


#building the query
q <- getbb("Wuppertal, Germany ") %>%  #specify city 
  opq() %>%  #create bbox using the city as reference 
  add_osm_feature("amenity", "fuel") #specify fuel amenity to return gas stations 

#create sf object 
gas_stations <- osmdata_sf(q)

#generate background map 
background_map <- get_map(getbb("Wuppertal, Germany "), maptype = "toner-background")

#plot map
ggmap(background_map)+
  geom_sf(data = gas_stations$osm_points,
          inherit.aes = FALSE,
          colour = "#238443",
          fill = "#004529",
          alpha = .5,
          size = 4,
          shape = 21)+
  labs(x = "", y = "")

gas_stations_points <- gas_stations$osm_points


writeOGR(gas_stations_points, "./gas_stations_geojson.geojson", layer="gas_stations_points", driver="GeoJSON")

#create the geojson file 
st_write(gas_stations_points, "gas_stations_points.geojson")