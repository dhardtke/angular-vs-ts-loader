import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub182Component} from "./stub182.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub182Component
        }])
    ],
    declarations: [
        Stub182Component
    ]
})
export class Stub182Module {

}
