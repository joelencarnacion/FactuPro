import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { alertRemoveSure, errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';
import { BranchesI, ResponseI } from 'src/app/interfaces/allinterfaces';
import { BranchesService } from 'src/app/services/branches.service';





@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit{
  BranchesList: Array<BranchesI> = [];
  branchForm: FormGroup;
  selectedBranch: any;
  @ViewChild('add_branch') addBranchModal: any;

constructor(
   private branchesService:BranchesService,
   private fb:FormBuilder
){
  this.branchForm = this.fb.group({
    id: new FormControl<number>(0),
    name: new FormControl<string>('',[Validators.required]),
    email: new FormControl<string>(''),
    phone:  new FormControl<string>('',[Validators.required]),
    latitude: new FormControl<string>(''),
    longitude: new FormControl<string>(''),
    state: new FormControl<string>('',[Validators.required]),
    city: new FormControl<string>('',[Validators.required]),
    zipCode: new FormControl<string>('',[Validators.required]),
    address: new FormControl<string>('',[Validators.required]),
    status: new FormControl<boolean>(true,[Validators.required]),
  })
}

  ngOnInit(): void {
    this.getBranches();
  }

  get currentBranch():BranchesI{
    const branch = this.branchForm.value as BranchesI;
    return branch;
  }

getBranches() {
  this.branchesService.getBranches().subscribe((resp: ResponseI) => {
    this.BranchesList = resp.data;
    console.log(this.BranchesList);
  })
}
postBranch() {
  this.branchesService.postBranch(this.currentBranch).subscribe((resp: ResponseI) => {
    successMessageAlert(resp.message);
    this.branchForm.reset();
    this.getBranches();
  })
}

async deleteBranch(branch: BranchesI) {
  let remove: boolean = await alertRemoveSure("are you sure?")
  if (remove) {
    this.branchesService.deleteBranch(branch.id!)
      .subscribe((resp: ResponseI) => {
        successMessageAlert("Success");
        this.getBranches();
      })
  }
}

updateBranch() {
  this.branchesService.updateBranch(this.currentBranch).subscribe((resp: any) => {
    successMessageAlert("Success");
    this.getBranches()
  })
}


closedModal(){
  const modalElement = document.getElementById('add_branch');
  if (modalElement) {
    modalElement.classList.remove('show');
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.style.display = 'none';
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    if (modalBackdrop && modalBackdrop.parentNode) {
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    }
  }
  this.branchForm.reset();
}
openEditModal(branch: BranchesI) {
  // Asigna el registro seleccionado a la variable
  this.selectedBranch = branch;
  // Llena el formulario con los datos del registro seleccionado
  this.branchForm.patchValue({
    id: this.selectedBranch.id,
    name: this.selectedBranch.name,
    email: this.selectedBranch.email,
    phone: this.selectedBranch.phone,
    latitude: this.selectedBranch.latitude,
    longitude: this.selectedBranch.longitude,
    state: this.selectedBranch.state,
    city: this.selectedBranch.city,
    zipCode: this.selectedBranch.zipCode,
    address: this.selectedBranch.address,
    status: this.selectedBranch.status
  });
  // Cambia el título del modal
  document.getElementById('modalTitle')!.innerText = 'Edit Branch';
  console.log(this.currentBranch)
}

resetFormEdit() {
  this.branchForm.reset(); // Restablece los valores del formulario
  document.getElementById('modalTitle')!.innerText = 'Edit Branch';
}
resetFormAdd() {
  this.branchForm.reset(); // Restablece los valores del formulario
  document.getElementById('modalTitle')!.innerText = 'Add Branch';
  console.log(this.currentBranch)

}

save(){
  if (this.branchForm.invalid) {
      errorMessageAlert("Debes completar los campos obligatorios para guardar");
  }else {
    if (!this.currentBranch.id) {
      this.postBranch()
      this.closedModal();
    }
    if (this.currentBranch.id) {
      this.updateBranch();
      this.closedModal();
    }
  }


}


}


