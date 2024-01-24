function openCarModal(carName, description) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center';
    modal.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-bold text-gray-900">${carName}</h3>
            <p class="mt-2 mb-4 text-sm text-gray-500">${description}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Close</button>
        </div>`;
    document.body.appendChild(modal);
}
