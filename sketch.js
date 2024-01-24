function openCarModal(carName, description) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50';
    modal.innerHTML = `
        <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 class="text-lg leading-6 font-medium text-gray-900">${carName}</h3>
            <p class="mt-2 mb-4 text-sm text-gray-500">${description}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Close</button>
        </div>`;
    document.body.appendChild(modal);
}
