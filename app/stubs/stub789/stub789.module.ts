import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub789Component} from "./stub789.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub789Component
        }])
    ],
    declarations: [
        Stub789Component
    ]
})
export class Stub789Module {

}
