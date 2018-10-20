import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub250Component} from "./stub250.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub250Component
        }])
    ],
    declarations: [
        Stub250Component
    ]
})
export class Stub250Module {

}
