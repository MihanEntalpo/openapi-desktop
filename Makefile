.RECIPEPREFIX := >
IMAGE_NAME=openapi-desktop-builder

.PHONY: docker-build build-linux build-windows build-macos

docker-build:
>docker build -t $(IMAGE_NAME) .

build-linux: docker-build
>docker run --rm -v $(PWD)/dist:/app/dist $(IMAGE_NAME) build:linux

build-windows: docker-build
>docker run --rm -v $(PWD)/dist:/app/dist $(IMAGE_NAME) build:win

build-macos: docker-build
>docker run --rm -v $(PWD)/dist:/app/dist $(IMAGE_NAME) build:mac
