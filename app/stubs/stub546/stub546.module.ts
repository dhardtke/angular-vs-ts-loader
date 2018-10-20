import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub546Component} from "./stub546.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub546Component
        }])
    ],
    declarations: [
        Stub546Component
    ]
})
export class Stub546Module {

}
