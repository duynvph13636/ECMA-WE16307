afterRender() {
    const formAdd = document.querySelector("#formAdd");
    // eslint-disable-next-line camelcase
    const img_preview = document.querySelector("#img-preview");
    // eslint-disable-next-line camelcase
    const img_post = document.querySelector("#file-upload");

    let imgLink = "";

    const CLOUDINARY_PRESET = "ck8bz8wq";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/fpolyduy/image/upload";

    // eslint-disable-next-line camelcase
    img_post.addEventListener("change", (e) => {
        // eslint-disable-next-line camelcase
        img_preview.src = URL.createObjectURL(e.target.files[0]);
    });

    formAdd.addEventListener("submit", async (e) => {
        e.preventDefault();
        const file = document.querySelector("#file-upload").files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);
            // call api cloudinary , để upload ảnh
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            imgLink = data.url;
            console.log(data.url);
        }
        add({
            catePostId: Number(document.querySelector("#idCategory").value),
            name: document.querySelector("#name_product").value,
            price: Number(document.querySelector("#price_product").value),
            description: document.querySelector("#description_product").value,
            quantity: Number(document.querySelector("#soluong_product").value),
            image: imgLink || "",
        });
        toastr.success("bạn đã thêm thành công");
        setTimeout(() => {
            document.location.href = "/admin/products";
        }, 2000);
    });
},
////////////////////////////////////////////////////////////////////////////////
//  afterRender() {
    const formSignup = document.querySelector("#formSignup");
    formSignup.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            const { data } = await signup({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
                address: document.querySelector("#address").value,
                number: document.querySelector("#number").value,
            });
            if (data) {
                toastr.success("Bạn đăng ký thành công , Chuyển trang sau 2s");
                setTimeout(() => {
                    document.location.href = "/signin";
                }, 2000);
            }
            console.log(data);
        } catch (error) {
            toastr.error("Đăng ký thất bại");
            console.log(error.response.data);
        }
    });
},
//////////////////////////
afterRender() {
    const formSignin = $("#formSignin");


    formSignin.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            const { data } = await signin({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            if (data) {
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Bạn đăng nhập thành công , Chuyển trang sau 2s");
                setTimeout(() => {
                    document.location.href = "/";
                }, 2000);
            }
            console.log(data);
        } catch (error) {
            toastr.error(error.response.data);
        }
    });
},