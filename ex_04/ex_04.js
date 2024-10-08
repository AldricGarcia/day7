function plusQuantity(button)
{
    let input = button.parentNode.querySelector("input");
    input.value = parseInt(input.value)+ 1;
}

function minusQuantity(button)
{
    let input = button.parentNode.querySelector("input");
    if(parseInt(input.value) > 1)
    {
        input.value = parseInt(input.value) - 1;
    }
}

function deleteProduct(button)
{
    button.closest(".item").remove();
}

function likeProduct(button)
{
    button.classList.toggle("is-active");
}

document.querySelectorAll(".plus-btn").forEach(button =>
{
    button.addEventListener("click", () => plusQuantity(button));
});

document.querySelectorAll(".minus-btn").forEach(button =>
{
    button.addEventListener("click", () => minusQuantity(button));
});

document.querySelectorAll(".delete-btn").forEach(button =>
{
    button.addEventListener("click", () => deleteProduct(button));
});

document.querySelectorAll(".like-btn").forEach(button =>
{
    button.addEventListener("click", () => likeProduct(button));
});