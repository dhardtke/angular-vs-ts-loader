import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub201Component} from "./stub201.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub201Component
        }])
    ],
    declarations: [
        Stub201Component
    ]
})
export class Stub201Module {

}
